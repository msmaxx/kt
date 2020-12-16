from django.db import models
from category.models import Category, SubCategory
from .constants import STATUS_READY, STATUS_NEW


# Create your models here.

class Seller(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Название магазина')
    url = models.URLField(verbose_name='Ссылка на магазин')
    description = models.CharField(max_length=600, verbose_name='Описание магазина')
    rating = models.FloatField(max_length=5, default='0', verbose_name='Рейтинг магазина')
    email = models.EmailField(verbose_name='E-mail')
    logo = models.ImageField(null=True, verbose_name='Логотип магазина', upload_to='images/')

    class Meta:
        verbose_name = 'Продавец'
        verbose_name_plural = 'Продавцы'

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=250, verbose_name='Название продукта')
    url = models.URLField(unique=True, verbose_name='Ссылка на продукт')
    regular_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, verbose_name='Обычная цена')
    discounted_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, verbose_name='Цена со скидкой')
    old_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, verbose_name='Старая цена (без скидки)')
    category = models.ForeignKey(Category, default=None, on_delete=models.CASCADE, null=True, verbose_name='Категория')
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, null=True, verbose_name='Подкатегория')
    image_url = models.URLField(verbose_name='Ссылка на изображение товара')
    publish_date = models.DateTimeField(verbose_name='Дата добавления')
    seller = models.ForeignKey('Seller', on_delete=models.CASCADE, verbose_name='Продавец', null=True)
    task = models.ForeignKey('Task', on_delete=models.PROTECT, default=STATUS_NEW, null=True, blank=True)

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.title


class Task(models.Model):
    seller = models.ForeignKey(Seller, verbose_name='Продавец', on_delete=models.CASCADE)
    url = models.URLField(unique=True, verbose_name='Ссылка на раздел магазина (категория)')
    status = models.IntegerField(verbose_name='Статус задания',
                                 choices=(
                                     (STATUS_NEW, 'Список товаров не получен'),
                                     (STATUS_READY, 'Список товаров получен'),
                                 ), default=STATUS_NEW)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, verbose_name='Категория')
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, null=True, verbose_name='Подкатегория')

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'

    def __str__(self):
        return f'#{self.pk}, {self.url}'
