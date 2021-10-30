from django.shortcuts import render
from django import views
from .models import Event, ClassicalConcert, Party, OpenAir


class BaseView(views.View):

    def get(self, request, *args, **kwargs):
        events = Event.objects.all()
        classical_concerts = ClassicalConcert.objects.all()
        partys = Party.objects.all()
        open_air = OpenAir.objects.all()
        result_list = {}
        for event in events:
            if event.type_event == 'ClassicalConcert':
                for classical_concert in classical_concerts:
                    if event.id == classical_concert.event_ptr_id:
                        classicaljson = {
                            'id': event.id,
                            'name': event.name,
                            'slug': event.slug,
                            'created_at': event.created_at,
                            'image': event.image,
                            'name_concert': classical_concert.name_concert,
                        }
                        result_list[event.id] = classicaljson
            elif event.type_event == 'Party':
                for party in partys:
                    if party.event_ptr_id == event.id:
                        partyjson = {
                            'id': event.id,
                            'name': event.name,
                            'slug': event.slug,
                            'created_at': event.created_at,
                            'image': event.image,
                            'age_limit': party.age_limit,
                        }
                        result_list[event.id] = partyjson
            elif event.type_event == 'OpenAir':
                for openair in open_air:
                    if openair.event_ptr_id == event.id:
                        openairjson = {
                            'id': event.id,
                            'name': event.name,
                            'slug': event.slug,
                            'created_at': event.created_at,
                            'image': event.image,
                            'headliner': openair.headliner,
                        }
                        result_list[event.id] = openairjson
            else:
                otherjson = {
                    'id': event.id,
                    'name': event.name,
                    'slug': event.slug,
                    'created_at': event.created_at,
                    'image': event.image,
                }
                result_list[event.id] = otherjson
        context = {
            'result': result_list
        }
        return render(request, 'base.html', context)


def index(request):
    return render(request, 'index.html', {})
