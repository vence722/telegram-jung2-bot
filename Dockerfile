FROM node:latest

MAINTAINER Simon Li <li@siutsin.com>

RUN npm install -g yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install
RUN touch /usr/src/app/.env

COPY . /usr/src/app

EXPOSE 443
CMD [ "yarn", "start" ]
