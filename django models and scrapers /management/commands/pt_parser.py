from collections import namedtuple
import bs4
import requests
import urllib.parse
from datetime import datetime

from django.core.management import BaseCommand, CommandError

from scraping.models import Product
from scraping.models import Task
from scraping.constants import STATUS_NEW, STATUS_READY

InnerBlock = namedtuple('Block', 'title,url,regular_price,discounted_price,old_price,image_url,publish_date')


class Block(InnerBlock):

    def __str__(self):
        return f'{self.title}\t{self.url} {self.regular_price}\t{self.discounted_price}\t{self.old_price}\t{self.image_url}\t{self.publish_date}'


class Photopointparser:

    def __init__(self):
        self.session = requests.Session()
        self.session.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        }
        self.task = None

    def find_task(self):
        obj = Task.objects.filter(status=STATUS_NEW, seller=1).first()
        if not obj:
            raise CommandError('No task found')
        self.task = obj

    def finish_task(self):
        self.task.status = STATUS_READY
        self.task.save()

    def get_page(self, page: int = None):
        params = {
            'pp': 240,
        }

        if page and page > 1:
            params['p'] = page

        url = self.task.url
        r = self.session.get(url, params=params)
        return r.text

    def parse_block(self, item):
        title = item.select_one('a.link1').text
        url = item.select_one('a.link1').get('href')
        price = item.select_one('p.price').get_text(strip=True).replace('€', '').replace(' ', '').split('-')
        regular_price = []
        discounted_price = []
        old_price_block = item.select_one('span.sale2')

        if old_price_block:
            old_price = old_price_block.text.replace('Об. цена', '').replace('€', '').replace(',', '.').replace(' ', '')
        else:
            old_price = None

        if len(price) == 1:
            regular_price = price[0].replace(',', '.').replace(' ', '')
            discounted_price = None
            old_price = None
        elif len(price) >= 2:
            discounted_price = price[0].replace(',', '.').replace(' ', '')
            regular_price = None

        image_url = item.select_one('a.single-product-image').find('img').get('data-src')

        today_date = datetime.now()
        publish_date = today_date.strftime("%Y-%m-%d %H:%M:%S")

        try:
            p = Product.objects.get(url=url)
            p.title = title,
            p.url = url,
            p.regular_price = regular_price,
            p.discounted_price = discounted_price,
            p.old_price = old_price,
            p.task = self.task,
            p.save()
        except Product.DoesNotExist:
            Product(
                title=title,
                url=url,
                seller=self.task.seller,
                regular_price=regular_price,
                discounted_price=discounted_price,
                old_price=old_price,
                image_url=image_url,
                publish_date=publish_date,
                category=self.task.category,
                subcategory=self.task.subcategory,
                task=self.task,
            ).save()

    def get_blocks(self, page: int = None):
        text = self.get_page(page=page)
        soup = bs4.BeautifulSoup(text, 'lxml')

        container = soup.select('div.product-wrapper')
        for item in container:
            self.parse_block(item=item)

    def get_pagination_limit(self):
        text = self.get_page()
        soup = bs4.BeautifulSoup(text, 'lxml')

        containers = soup.select('div.pagination')
        if not containers:
            return 1
        for container in containers:
            page = container.find_all('a')

        last_page = page[-2]

        href = last_page.get('href')
        if not href:
            return 1

        r = urllib.parse.urlparse(href)
        params = urllib.parse.parse_qs(r.query)
        return int(params['p'][0])

    def parse_all(self):
        self.find_task()

        limit = self.get_pagination_limit()
        print(f'Total of pages found: {limit}')
        for i in range(1, limit + 1):
            self.get_blocks(page=i)
        self.finish_task()


class Command(BaseCommand):
    help = 'PhotoPoint parser'

    def handle(self, *args, **options):
        parser = Photopointparser()
        parser.parse_all()
