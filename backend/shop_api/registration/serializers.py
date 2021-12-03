from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'password', 'last_name', 'first_name')

class UserSerializer(UserCreateSerializer):

    def post(self, validated_data):
        id = validated_data.get('id')
        return User.objects.get(id=id)

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Token
        fields = '__all__'