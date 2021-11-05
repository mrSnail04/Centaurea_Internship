from rest_framework.decorators import action
from rest_framework import response, status, viewsets
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import EventSerializer, ClassicalConcertSerializer, PartySerializer, OpenAirSerializer
from concert.models import Event, ClassicalConcert, Party, OpenAir


class EventViewSet(viewsets.ModelViewSet):

    serializer_class = EventSerializer
    queryset = Event.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def all_event(self, *args, **kwargs):
        event_serializer = EventSerializer(Event.objects.all())
        return response.Response(event_serializer.data)

    @action(methods=['post'], detail=False,
            url_path='add_event', permission_classes=[IsAdminUser])
    def add_event(self, request, *args, **kwargs):
        data = request.data.get('event')
        serializer = EventSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='remove_event/(?P<event_id>\d+)')
    def delete_event(self, request, *args, **kwargs):
            event = get_object_or_404(Event, id=kwargs['event_id'])
            event.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='update_event/(?P<event_id>\d+)')
    def update_event(self, request, *args, **kwargs):
        old_event = get_object_or_404(Event, id=kwargs['event_id'])
        data_update = request.data.get('event')
        if data_update.get('type_event') == 'OpenAir':
            old_event.delete()
            OpenAirViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'ClassicalConcert':
            old_event.delete()
            ClassicalConcertViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'Party':
            old_event.delete()
            PartyViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        else:
            serializer = EventSerializer(instance=old_event, data=data_update, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PartyViewSet(viewsets.ModelViewSet):

    serializer_class = PartySerializer
    queryset = Party.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def all_event(self, *args, **kwargs):
        Party_serializer = PartySerializer(Event.objects.all())
        return response.Response(Party_serializer.data)

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser],
            url_path='event')
    def add_event(self, request, *args, **kwargs):
        data = request.data.get('event')
        serializer = PartySerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='update_event/(?P<event_id>\d+)')
    def update_event(self, request, *args, **kwargs):
        old_event = get_object_or_404(Party, id=kwargs['event_id'])
        data_update = request.data.get('event')
        if data_update.get('type_event') == 'OpenAir':
            old_event.delete()
            OpenAirViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'ClassicalConcert':
            old_event.delete()
            ClassicalConcertViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'Other':
            old_event.delete()
            EventViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        else:
            serializer = PartySerializer(instance=old_event, data=data_update, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='remove_event/(?P<event_id>\d+)')
    def delete_event(self, request, *args, **kwargs):
        event = get_object_or_404(Party, id=kwargs['event_id'])
        event.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class ClassicalConcertViewSet(viewsets.ModelViewSet):

    serializer_class = ClassicalConcertSerializer
    queryset = ClassicalConcert.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def all_event(self, *args, **kwargs):
        Classical_serializer = ClassicalConcertSerializer(Event.objects.all())
        return response.Response(Classical_serializer.data)

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser],
            url_path='add_event')
    def add_event(self, request, *args, **kwargs):
        data = request.data.get('event')
        serializer = ClassicalConcertSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='update_event/(?P<event_id>\d+)')
    def update_event(self, request, *args, **kwargs):
        old_event = get_object_or_404(ClassicalConcert, id=kwargs['event_id'])
        data_update = request.data.get('event')
        if data_update.get('type_event') == 'OpenAir':
            old_event.delete()
            OpenAirViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'Party':
            old_event.delete()
            PartyViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'Other':
            old_event.delete()
            EventViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        else:
            serializer = ClassicalConcertSerializer(instance=old_event, data=data_update, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='remove_event/(?P<event_id>\d+)')
    def delete_event(self, request, *args, **kwargs):
        event = get_object_or_404(ClassicalConcert, id=kwargs['event_id'])
        event.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)


class OpenAirViewSet(viewsets.ModelViewSet):

    serializer_class = OpenAirSerializer
    queryset = OpenAir.objects.all()

    @action(methods=['get'], detail=False, permission_classes=[IsAuthenticated])
    def all_event(self, *args, **kwargs):
        Openair_serializer = OpenAirSerializer(Event.objects.all())
        return response.Response(Openair_serializer.data)

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser],
            url_path='add_event')
    def add_event(self, request, *args, **kwargs):
        data = request.data.get('event')
        serializer = OpenAirSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='update_event/(?P<event_id>\d+)')
    def update_event(self, request, *args, **kwargs):
        old_event = get_object_or_404(OpenAir, id=kwargs['event_id'])
        data_update = request.data.get('event')
        if data_update.get('type_event') == 'Party':
            old_event.delete()
            PartyViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'ClassicalConcert':
            old_event.delete()
            ClassicalConcertViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        elif data_update.get('type_event') == 'Other':
            old_event.delete()
            EventViewSet.add_event(self, request)
            return response.Response(status=status.HTTP_201_CREATED)
        else:
            serializer = OpenAirSerializer(instance=old_event, data=data_update, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['put'], detail=False, permission_classes=[IsAdminUser],
            url_path='remove_event/(?P<event_id>\d+)')
    def delete_event(self, request, *args, **kwargs):
        event = get_object_or_404(OpenAir, id=kwargs['event_id'])
        event.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)