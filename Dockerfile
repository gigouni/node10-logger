FROM node:10.13.0

COPY ./config /app/config
COPY ./package.json /app/package.json
COPY ./src /app/src
COPY ./node_modules /app/node_modules

WORKDIR /app

ENV NODE_ENV=production

CMD npm run dev
