from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('registration/', index),
    path('api/logout/', index),
    path('profile/', index),
]
