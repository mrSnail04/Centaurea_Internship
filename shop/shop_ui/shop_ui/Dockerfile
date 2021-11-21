FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . ./
EXPOSE 3000

#FROM node:14.4.0-alpine3.10
#USER root
#WORKDIR /frontend
#COPY . /frontend
##ARG API_URL
##ENV REACT_APP_HOST_IP_ADDRESS $API_URL
##RUN npm build