from django.conf import settings
from django.core.management.base import BaseCommand
from registration.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        print('START')
        if User.objects.count() == 0:
            print('start')
            username = 'admin'
            email = 'admin@admin.com'
            password = 'admin'
            first_name = 'admin'
            last_name = 'admin'
            print('Creating account for %s (%s)' % (username, email))
            admin = User.objects.create_superuser(email=email,
                                                  username=username,
                                                  password=password,
                                                  first_name=first_name,
                                                  last_name=last_name)
            admin.is_active = True
            admin.is_admin = True
            admin.save()
        else:
            print('Admin accounts can only be initialized if no Accounts exist')