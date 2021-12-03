from rest_framework.authtoken.models import Token
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework import response
from rest_framework.permissions import IsAuthenticated
from .serializers import TokenSerializer, UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class LogoutViewSet(viewsets.ViewSet):

    serializer_class = TokenSerializer
    queryset = Token.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def logout(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return response.Response(status=status.HTTP_201_CREATED)

class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()

    @action(methods=['get'], detail=False, url_path='(?P<id>\d+)')
    def list(self, *args, **kwargs):
        data_user = User.objects.filter(id=kwargs['id'])
        serializer = UserSerializer(data_user)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
