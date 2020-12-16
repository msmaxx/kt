from rest_framework import routers
from .api import ProductViewSet, SellerViewSet

router = routers.DefaultRouter()
router.register('api/seller', SellerViewSet, 'seller')
router.register('api/product', ProductViewSet, 'product')

urlpatterns = router.urls