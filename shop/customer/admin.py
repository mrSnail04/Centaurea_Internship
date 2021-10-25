from django.contrib import admin
from .models import Customer, Cart, CartProduct


admin.site.register(Customer)
admin.site.register(CartProduct)
admin.site.register(Cart)


