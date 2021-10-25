from django.shortcuts import render
from django import views
from .models import Event


class BaseView(views.View):

    def get(self, request, *args, **kwargs):
        events = Event.objects.all()
        context = {
            'events': events,
        }
        return render(request, 'base.html', context)
