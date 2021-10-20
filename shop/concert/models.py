from django.db import models


class Event(models.Model):

    name = models.CharField(max_length=100, verbose_name='Название мероприятия')
    date = models.DateField(verbose_name='Дата мероприятия')
    slug = models.SlugField()
    qty_ticket = models.IntegerField(verbose_name='Количество билетов')
    address = models.CharField(max_length=1024, verbose_name='Адрес')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'


class ClassicalConcert(Event, models.Model):
    voice_type = models.CharField(max_length=100, verbose_name='Тип голоса')
    name_concert = models.CharField(max_length=100, verbose_name='Название концерта')
    composer = models.CharField(max_length=100, verbose_name='Композитор')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Классический концерт'
        verbose_name_plural = 'Классические концерты'


class Party(Event, models.Model):
    age_limit = models.IntegerField(verbose_name='Возростной ценз')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Вечеринка'
        verbose_name_plural = 'Вечеринки'


class OpenAir(Event, models.Model):
    route = models.CharField(max_length=1000, verbose_name='Маршрут')
    headliner = models.CharField(max_length=100, verbose_name='Хэдлайнер')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Опэнэйр'
        verbose_name_plural = 'Опэнэйры'


