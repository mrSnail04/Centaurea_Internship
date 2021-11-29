FROM python:3.8

ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend

COPY requirements.txt /app/backend

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r requirements.txt

COPY . /app/backend
COPY ./scripts/ /app/
ENV PORT 8000
EXPOSE 8080

RUN ["chmod", "+x", "/app/entrypoint.sh"]
ENTRYPOINT ["/app/entrypoint.sh"]
