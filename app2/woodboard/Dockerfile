FROM node:alpine
LABEL authors="Olli-Pekka Wallin"

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/files
RUN touch /usr/src/app/files/ping_counter.inf

COPY . .
RUN yarn install

EXPOSE 3010
CMD ["node", "index.js"]
