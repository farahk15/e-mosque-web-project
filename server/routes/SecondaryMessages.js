const express = require('express')
const { SecondaryMessageReader, SecondaryMessageWriter } = require('../controllers')

const router = express.Router()

router.get('/', SecondaryMessageReader )
router.post('/', SecondaryMessageWriter )

module.exports = router