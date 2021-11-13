from django.db import models


class Event(models.Model):
    TYPE_CLASSIC = 'ClassicalConcert'
    TYPE_PARTY = 'Party'
    TYPE_OPENAIR = 'OpenAir'
    TYPE_OTHER = 'Other'

    TYPE_CHOICES = (
        (TYPE_CLASSIC, 'Классический концерт'),
        (TYPE_PARTY, 'Вечеринка'),
        (TYPE_OPENAIR, 'ОпэнЭйр'),
        (TYPE_OTHER, 'Другой'),
    )

    name = models.CharField(max_length=100, verbose_name='Название мероприятия')
    actor = models.CharField(max_length=255, verbose_name='исполнитель/группа')
    date = models.DateField(verbose_name='Дата мероприятия')
    slug = models.SlugField()
    qty_ticket = models.PositiveIntegerField(verbose_name='Количество билетов')
    address = models.CharField(max_length=1024, verbose_name='Адрес')
    type_event = models.CharField(max_length=100, verbose_name='Тип мероприятия',
                                  choices=TYPE_CHOICES, default=TYPE_OTHER)
    image = models.ImageField(upload_to='images', verbose_name='Изображение', null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True, verbose_name='Дата добавление мероприятия')

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

    age_limit = models.CharField(max_length=100, verbose_name='Возрастной ценз')

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


