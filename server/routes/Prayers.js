const express = require('express')
const router = express.Router()

const {PrayersHandler} = require("../controllers/Prayers/PrayersTimesHandler")

router.get('/', PrayersHandler )

module.exports = router