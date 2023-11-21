const express = require('express')
const MovieRouter = require('./movie')
const router = express.Router()

// http://localhost:3000/api/movies 
router.use('/movies', MovieRouter)
// router.use('/usuarios', usuariosRouter)

module.exports = router