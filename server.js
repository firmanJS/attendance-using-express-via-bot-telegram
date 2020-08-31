'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const routing = require('./routes')
const dbConfig = require('./config/db')
const cors = require('cors')
const helmet = require('helmet')
const telegram = require('node-telegram-bot-api')
const { store, update } = require('./controller/AttendanceCtrl')
const token = process.env.TELEGRAM_TOKEN
const bot = new telegram(token, { polling: true })
const emoji = '\u{0001F44C}'

app.use(helmet()) // secure apps by setting various HTTP headers
app.use(cors()) // enable cors
dbConfig.connectWithRetry() // connect to mongodb
app.use(express.json())
app.use(routing) // routing
bot.onText(/\/checkin/, async (msg, match) => {
  const username = match.input.split('|')[1]
  const attendance = match.input.split('|')[2]
  const type = match.input.split('|')[3]
  const times = match.input.split('|')[4]
  const chatId = msg.chat.id
  if (attendance === undefined) {
    bot.sendMessage(chatId, 'format harus di isi Contoh : | username | Hadir | Work From Home | 11:00')
    return
  }
  const bodyInput = {
    username: username,
    checkin: true,
    type: attendance,
    checkintime: times
  }
  await store(bodyInput)
  bot.sendMessage(
    chatId,
    `<b>${msg.chat.first_name}</b> : <b>${attendance}</b> - <b>${type}</b> - <b>${times}</b> ${emoji}`,
    { parse_mode: 'HTML' }
  )
})
bot.onText(/\/checkout/, async (msg, match) => {
  const username = match.input.split('|')[1]
  const times = match.input.split('|')[2]
  const chatId = msg.chat.id
  if (username === undefined) {
    bot.sendMessage(chatId, 'format harus di isi Contoh : | username | 12:00')
    return
  }
  const bodyInput = {
    username: username,
    checkout: true,
    checkouttime: times
  }
  await update(bodyInput)
  bot.sendMessage(
    chatId,
    `<b>${msg.chat.first_name}</b> : Berhasil Checkout - <b>${times}</b> ${emoji}`,
    { parse_mode: 'HTML' }
  )
})
app.listen(process.env.APP_PORT, () => {
  console.log(`attendance app running in port ${process.env.APP_PORT}`)
})
