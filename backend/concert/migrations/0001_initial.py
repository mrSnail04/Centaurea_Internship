# Generated by Django 3.2.8 on 2021-11-04 16:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название мероприятия')),
                ('actor', models.CharField(default='no', max_length=255, verbose_name='исполнитель/группа')),
                ('date', models.DateField(verbose_name='Дата мероприятия')),
                ('slug', models.SlugField()),
                ('qty_ticket', models.PositiveIntegerField(verbose_name='Количество билетов')),
                ('address', models.CharField(max_length=1024, verbose_name='Адрес')),
                ('type_event', models.CharField(choices=[('ClassicalConcert', 'Классический концерт'), ('Party', 'Вечеринка'), ('OpenAir', 'ОпэнЭйр'), ('Other', 'Другой')], default='Other', max_length=100, verbose_name='Тип мероприятия')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Изображение')),
                ('created_at', models.DateTimeField(auto_now=True, verbose_name='Дата добавление мероприятия')),
            ],
            options={
                'verbose_name': 'Мероприятие',
                'verbose_name_plural': 'Мероприятия',
            },
        ),
        migrations.CreateModel(
            name='ClassicalConcert',
            fields=[
                ('event_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='concert.event')),
                ('voice_type', models.CharField(max_length=100, verbose_name='Тип голоса')),
                ('name_concert', models.CharField(max_length=100, verbose_name='Название концерта')),
                ('composer', models.CharField(max_length=100, verbose_name='Композитор')),
            ],
            options={
                'verbose_name': 'Классический концерт',
                'verbose_name_plural': 'Классические концерты',
            },
            bases=('concert.event', models.Model),
        ),
        migrations.CreateModel(
            name='OpenAir',
            fields=[
                ('event_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='concert.event')),
                ('route', models.CharField(max_length=1000, verbose_name='Маршрут')),
                ('headliner', models.CharField(max_length=100, verbose_name='Хэдлайнер')),
            ],
            options={
                'verbose_name': 'Опэнэйр',
                'verbose_name_plural': 'Опэнэйры',
            },
            bases=('concert.event', models.Model),
        ),
        migrations.CreateModel(
            name='Party',
            fields=[
                ('event_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='concert.event')),
                ('age_limit', models.CharField(max_length=100, verbose_name='Возрастной ценз')),
            ],
            options={
                'verbose_name': 'Вечеринка',
                'verbose_name_plural': 'Вечеринки',
            },
            bases=('concert.event', models.Model),
        ),
    ]