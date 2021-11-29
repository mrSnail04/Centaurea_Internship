FROM python:3.8

WORKDIR /app/backend

COPY requirements.txt /app/backend

RUN  \
    apk update && \
    apk upgrade && \
    apk add bash && \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip3 install --upgrade pip -r requirements.txt && \
    apk --purge del .build-deps

COPY . /app/backend
COPY ./scripts/ /app/

ENV PORT 8000
EXPOSE 8080

RUN ["chmod", "+x", "/app/entrypoint-dev.sh"]
ENTRYPOINT ["/app/entrypoint-dev.sh"]
