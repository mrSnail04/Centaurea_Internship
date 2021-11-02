from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('concert.urls')),
    path('admin/', admin.site.urls),
    path('', include('registration.urls')),
    path('api/', include('shop_api.main.router')),
    path('accounts/', include('allauth.urls')),

]
