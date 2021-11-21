FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install gunicorn
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . ./

EXPOSE 8000

#FROM python:3
#ENV PYTHONUNBUFFERED 1
#
#ARG DJANGO_ALLOWED_HOSTS
#ARG DJANGO_SECRET_KEY
#ARG DJANGO_CORS_ORIGIN_WHITELIST
#
#ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
#ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
#ENV DJANGO_CORS_ORIGIN_WHITELIST $DJANGO_CORS_ORIGIN_WHITELIST
#
#RUN mkdir /backend
#WORKDIR /backend
#COPY requirements.txt /backend/
#EXPOSE 8000
#RUN pip install -r requirements.txt
#COPY . /backend/

