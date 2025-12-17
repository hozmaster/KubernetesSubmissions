FROM node:alpine
LABEL authors="Olli-Pekka Wallin"

RUN mkdir -p /usr/src/app/files
WORKDIR /usr/src/app

COPY . .
RUN yarn install

EXPOSE 3010

CMD ["node", "index.js"]
