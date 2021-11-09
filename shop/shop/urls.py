from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('concert.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('shop_api.main.router')),
    path('accounts/', include('allauth.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
