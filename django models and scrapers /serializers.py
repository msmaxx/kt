from rest_framework import serializers

from .models import Product
from .models import Seller

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class SellerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = '__all__'
