from django.contrib import admin
from .models import Event, ClassicalConcert, Party, OpenAir


admin.site.register(Event)
admin.site.register(ClassicalConcert)
admin.site.register(Party)
admin.site.register(OpenAir)

