from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']

    def __str__(self):
        return self.username