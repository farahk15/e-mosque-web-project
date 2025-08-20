const express = require('express')
const SystemTimeHandler = require('../controllers/Date/DateHandler')
const router = express.Router()

module.exports = router

router.post('/', SystemTimeHandler )