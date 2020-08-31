'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Attendance = new Schema({
  username: { type: String, upercase: true, index: true },
  checkin: { type: Boolean, index: true, required: true },
  checkout: { type: Boolean, index: true, default: false },
  type: { type: String, index: true, default: null },
  checkintime: { type: String, index: true, default: '00:00' },
  checkouttime: { type: String, index: true, default: '00:00' }
}, { timestamps: true })

module.exports = mongoose.model('Attendance', Attendance)
