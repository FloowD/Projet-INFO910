FROM node:16.13.1-alpine
WORKDIR /usr/src/app
COPY  . /usr/src/app
RUN npm install
EXPOSE 5000
CMD [ "node", "server.js" ]