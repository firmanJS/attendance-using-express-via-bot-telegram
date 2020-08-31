'use strict'
const Attendance = require('../model/Attendance')

const store = async (input) => {
  try {
    return await Attendance.create(input)
  } catch (error) {
    return error
  }
}

const update = async (input) => {
  try {
    return await Attendance.findOneAndUpdate({
      username: input.username
    },{ $set:input })
  } catch (error) {
    return error
  }
}

module.exports = {
  store, update
}
