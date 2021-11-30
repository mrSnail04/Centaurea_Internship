#!/bin/bash

python manage.py backend/makemigrations --no-input
python manage.py backend/migrate --no-input
python backend/manage.py runserver 0.0.0.0:$PORT
