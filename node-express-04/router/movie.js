const express = require('express')
const MovieController = require('../controller/movie')
const movieRouter = express.Router()

movieRouter.get('/', MovieController.getAll )
movieRouter.get('/:id', MovieController.getOne )


module.exports = movieRouter