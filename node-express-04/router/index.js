const express = require('express')
const movieRouter = require('./movie')
const router = express.Router()

router.use('/movies', movieRouter )


module.exports = router