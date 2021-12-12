from django.db import models
from concert.models import Event
from django.contrib.auth import get_user_model


User = get_user_model()


class Product(models.Model):

    event = models.ForeignKey(Event, verbose_name='Мероприятие', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название')
    slug = models.SlugField(unique=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name='Цена')

    def __str__(self):
        return f'{self.id}'

    def save(self, *args, **kwargs):
        self.price = self.event.price
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'


class Order(models.Model):
    # Заказ

    STATUS_BOOKED = 'booked'
    STATUS_NEW = 'new'
    STATUS_IN_PROGRESS = 'in_progress'
    STATUS_READY = 'is_ready'
    STATUS_COMPLETED = 'completed'

    STATUS_CHOICES = (
        (STATUS_BOOKED, 'Забронирован'),
        (STATUS_NEW, 'Новый заказ'),
        (STATUS_IN_PROGRESS, 'Заказ в обработке'),
        (STATUS_READY, 'Заказ готов'),
        (STATUS_COMPLETED, 'Заказ  получен')
    )

    customer = models.ForeignKey(User, verbose_name='Покупатель', related_name='orders', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, verbose_name='Имя')
    last_name = models.CharField(max_length=255, verbose_name='Фамилия')
    cart = models.ForeignKey('Cart', verbose_name='Корзина', on_delete=models.CASCADE)
    status = models.CharField(max_length=100, verbose_name='Статус заказа', choices=STATUS_CHOICES, default=STATUS_NEW)
    created_at = models.DateField(verbose_name='Дата создание заказа', auto_now=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


class CartProduct(models.Model):
    # Продук корзины

    user = models.ForeignKey(User, verbose_name='Покупатель', on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', verbose_name='Корзина', on_delete=models.CASCADE)
    qty = models.PositiveIntegerField(default=1, verbose_name='Количество товара')
    product = models.ForeignKey(Product, verbose_name='Билет', on_delete=models.CASCADE)
    final_price = models.DecimalField(verbose_name='Общая цена', max_digits=9, decimal_places=2)

    def __str__(self):
        return "Продукт {} для корзины".format(self.product.title)

    def save(self, *args, **kwargs):
        self.final_price = self.qty * self.product.price
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Продукт корзины'
        verbose_name_plural = 'Продукты корзины'


class Cart (models.Model):
    # Корзина

    owner = models.ForeignKey(User, verbose_name='Покупатель', on_delete=models.CASCADE)
    products = models.ManyToManyField(
        CartProduct, blank=True, verbose_name='Продукты для корзины', related_name='related_cart')
    total_product = models.PositiveIntegerField(verbose_name='Общие кол-во товара', default=0)
    final_price = models.DecimalField(verbose_name='Общая цена', max_digits=9, decimal_places=2, null=True, blank=True)
    in_order = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'
