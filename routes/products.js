const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {res.json({mssg:'all products'}) })

module.exports = router