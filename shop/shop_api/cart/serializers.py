from rest_framework import serializers
from customer.models import Cart, CartProduct, Customer, Product
from ..main.serializers import EventSerializer


class ProductSerializer(serializers.ModelSerializer):

    event = EventSerializer()

    class Meta:
        model = Product
        fields = '__all__'


class CartProductSerializer(serializers.ModelSerializer):

    product = ProductSerializer()

    class Meta:
        model = CartProduct
        fields = ['id', 'product', 'qty', 'final_price']


class CustomerSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = '__all__'

    @staticmethod
    def get_user(obj):
        first_name, last_name = obj.user.first_name, obj.user.last_name
        if not (first_name and last_name):
            return obj.user.username
        return ' '.join([first_name, last_name])


class CartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)
    owner = CustomerSerializer()

    class Meta:
        model = Cart
        fields = '__all__'