FROM node:14-alpine

WORKDIR /app/src

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]