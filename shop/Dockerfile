FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install gunicorn
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . ./

EXPOSE 8080

