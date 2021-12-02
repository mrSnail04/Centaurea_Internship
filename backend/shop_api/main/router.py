from rest_framework import routers
from ..cart.view import CartViewSet
from ..main.view import EventViewSet, PartyViewSet, OpenAirViewSet, ClassicalConcertViewSet
from ..registration.view import LogoutViewSet, UserViewSet


router = routers.SimpleRouter()
router.register('', LogoutViewSet, basename='logout')
router.register('user-admin', UserViewSet, basename='user')
router.register('cart', CartViewSet, basename='cart')
router.register('event', EventViewSet, basename='event')
router.register('party', PartyViewSet, basename='party')
router.register('classicalconcert', ClassicalConcertViewSet, basename='classicalconcert')
router.register('openair', OpenAirViewSet, basename='openair')

urlpatterns = []
urlpatterns += router.urls
