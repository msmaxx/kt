from django.contrib import admin
from .models import Seller, Product, Task


@admin.register(Seller)
class SellerAdmin(admin.ModelAdmin):
    list_display = ('pk', 'name', 'email', 'rating', 'url')
    list_filter = ('name', 'rating')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'seller', 'regular_price', 'discounted_price', 'old_price', 'category', 'subcategory', 'publish_date')
    list_filter = ('category', 'subcategory', 'seller')


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('pk', 'url', 'seller', 'category', 'subcategory', 'status')
