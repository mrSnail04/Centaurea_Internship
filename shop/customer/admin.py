from django.contrib import admin
from .models import Customer, Cart, CartProduct, Product, Order


admin.site.register(Customer)
admin.site.register(CartProduct)
admin.site.register(Cart)
admin.site.register(Product)
admin.site.register(Order)


