from rest_framework.authtoken.models import Token
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework import response
from rest_framework.permissions import IsAuthenticated
from .serializers import TokenSerializer, UserSerializer


class LogoutViewSet(viewsets.ViewSet):

    serializer_class = TokenSerializer
    queryset = Token.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def logout(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return response.Response(status=status.HTTP_201_CREATED)

class UserViewSet(viewsets.ViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def get_user(self, request, *args, **kwargs):
        return User.objects.filter(id=self.user.id)