from .models import Seller, Product

from rest_framework import viewsets, permissions
from .serializers import SellerSerializers, ProductSerializers

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializers

class SellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = SellerSerializers