from rest_framework import serializers
from customer.models import Customer, Product
from concert.models import Event, ClassicalConcert, Party, OpenAir


class PartySerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return Party.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.qty_ticket = validated_data.get('qty_ticket', instance.qty_ticket)
        instance.address = validated_data.get('address', instance.address)
        instance.type_event = validated_data.get('type_event', instance.type_event)
        instance.image = validated_data.get('image', instance.image)
        instance.age_limit = validated_data.get('age_limit', instance.age_limit)
        instance.save()

        return instance

    class Meta:
        model = Party
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return Event.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.qty_ticket = validated_data.get('qty_ticket', instance.qty_ticket)
        instance.address = validated_data.get('address', instance.address)
        instance.type_event = validated_data.get('type_event', instance.type_event)
        instance.image = validated_data.get('image', instance.image)
        instance.save()

        return instance

    class Meta:
        model = Event
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    event = EventSerializer()

    class Meta:
        model = Product
        fields = '__all__'


class ClassicalConcertSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return ClassicalConcert.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.qty_ticket = validated_data.get('qty_ticket', instance.qty_ticket)
        instance.address = validated_data.get('address', instance.address)
        instance.type_event = validated_data.get('type_event', instance.type_event)
        instance.image = validated_data.get('image', instance.image)
        instance.voice_type = validated_data.get('voice_type', instance.voice_type)
        instance.name_concert = validated_data.get('name_concert ', instance.name_concert)
        instance.composer = validated_data.get('composer', instance.composer)
        instance.save()

        return instance

    class Meta:
        model = ClassicalConcert
        fields = '__all__'




class OpenAirSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return OpenAir.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.qty_ticket = validated_data.get('qty_ticket', instance.qty_ticket)
        instance.address = validated_data.get('address', instance.address)
        instance.type_event = validated_data.get('type_event', instance.type_event)
        instance.rout = validated_data.get('rout', instance.rout)
        instance.headliner = validated_data.get('headliner', instance.headliner)
        instance.save()

        return instance

    class Meta:
        model = OpenAir
        fields = '__all__'
