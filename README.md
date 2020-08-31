# attendance-using-express-via-bot-telegram
this application is an application to do attendance via telegram bot using expressjs

# how to use
* create telegram bot search in your telegram `BotFather` and typing `/newbot` and enter
* typing your naming boot example tes_bot and enter `_bot` is required in your last name
* if your success your have recived message token save your token
* copy environment variable with your terminal
```sh
cp .env-sample .env
```
* fill all environment variable
* run attendance app
run manualy 
```sh
# install package
npm install

#  running app
npm run start
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
docker-compose exec attendance_app npm install
```
* after running app open your telegram and search your bot typing message like this for checkin `/checkin | user | Hadir | Work From Home | 11:00`
or checkout `/checkout | user | 11:00`
