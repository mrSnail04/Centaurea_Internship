from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('', include('concert.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('shop_api.main.router')),
    path('accounts/', include('allauth.urls')),
    path('auth/', include('djoser.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_view'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),
]

