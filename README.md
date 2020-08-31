# attendance-using-express-via-bot-telegram
this application is an application to do attendance via telegram bot using expressjs

# how to use
1. create telegram bot search in your telegram `BotFather` and typing /newbot and enter
2. typing your naming boot example tes_bot and enter `_bot` is required in your last name
3. if your success your have recived message token
4. copy environment variable with your terminal
```sh
cp .env-sample .env
```
5. fill all environment variable
6. run attendance app
run manualy 
```sh
# install package
npm install

#  running app
npm run start

# running unit tetsing
npm run test 
```
run with docker
```sh
docker-compose up --build
```

#### or run with background process

```sh
docker-compose up --build -d
```
#### execution npm with container docker
```sh
# install package
docker-compose exec boillerplate npm install

# running unit testing
docker-compose exec boillerplate npm run test
