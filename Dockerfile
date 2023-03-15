FROM node:18.14.2-alpine
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
CMD node index.js