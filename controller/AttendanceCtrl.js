'use strict'
const Attendance = require('../model/Attendance')

const store = async (input) => {
  try {
    return await Attendance.create(input)
  } catch (error) {
    return error
  }
}

const update = async (req, res, next) => {
  try {
    const result = await Items.findByIdAndUpdate(req.params.id,
      { $set: req.body }, { new: true })
    if (!result) return next()
    res.json({
      'message' : 'succesfully checkout',
      'data' : result
    }).status(200)
  } catch (error) {
    res.json({
      'message' : 'error checkout',
      'data' : error
    }).status(422)
  }
}

module.exports = {
  store, update
}
