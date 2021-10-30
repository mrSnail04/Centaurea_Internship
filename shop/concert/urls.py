from django.urls import path
from .views import BaseView, index

urlpatterns = [
    path('', BaseView.as_view(), name='base'),
    path('react/', index),
]
