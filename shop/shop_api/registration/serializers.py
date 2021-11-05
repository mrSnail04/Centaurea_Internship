from django.contrib.auth.models import User
from djoser.serializers import UserCreateSerializer


class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'password', 'last_name', 'first_name')
