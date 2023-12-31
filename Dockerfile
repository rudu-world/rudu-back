FROM node:18.18.2-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE ${PORT}

CMD ["yarn" "dev"]