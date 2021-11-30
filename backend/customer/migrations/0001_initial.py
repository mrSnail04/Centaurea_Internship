# Generated by Django 3.2.8 on 2021-11-04 16:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('concert', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_product', models.PositiveIntegerField(default=0, verbose_name='Общие кол-во товара')),
                ('final_price', models.DecimalField(blank=True, decimal_places=2, max_digits=9, null=True, verbose_name='Общая цена')),
                ('in_order', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Корзина',
                'verbose_name_plural': 'Корзины',
            },
        ),
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.PositiveIntegerField(default=1, verbose_name='Количество товара')),
                ('final_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Общая цена')),
            ],
            options={
                'verbose_name': 'Продукт корзины',
                'verbose_name_plural': 'Продукты корзины',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('slug', models.SlugField(unique=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Цена')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='concert.event', verbose_name='Мероприятие')),
            ],
            options={
                'verbose_name': 'Продукт',
                'verbose_name_plural': 'Продукты',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=255, verbose_name='Фамилия')),
                ('status', models.CharField(choices=[('booked', 'Забронирован'), ('new', 'Новый заказ'), ('in_progress', 'Заказ в обработке'), ('is_ready', 'Заказ готов'), ('completed', 'Заказ  получен')], default='new', max_length=100, verbose_name='Статус заказа')),
                ('created_at', models.DateField(auto_now=True, verbose_name='Дата создание заказа')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.cart', verbose_name='Корзина')),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
            },
        ),
    ]
