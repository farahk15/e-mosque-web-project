const express = require('express')
const { PrimaryMessageWriter, PrimaryMessageReader } = require('../controllers')
const router = express.Router()
 
router.get('/', PrimaryMessageReader )
router.post('/', PrimaryMessageWriter )

module.exports = router