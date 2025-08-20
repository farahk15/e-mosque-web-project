const express = require('express')
const { HadeethReader, HadeethWriter } = require('../controllers')
const router = express.Router()
const { SearchHadeeth } = require('../controllers')

router.get('/', HadeethReader )
router.post('/', HadeethWriter )
router.post('/SearchHadeeth', SearchHadeeth)

module.exports = router