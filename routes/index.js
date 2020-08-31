'use strict'
const express = require('express')
const router = express()
router.get(`/api/v1/`, (_req, res) => {
  res.json({
    "message": "Welcome to attendance app using telegram bot"
  })
})

module.exports = router
