const express = require('express')
const MovieController = require('../controllers')

const MovieRouter = express.Router()

// http://localhost:3000/api/movies/ 
// router.route('/')
//   .get()
//   .post()

MovieRouter.get('/', MovieController.getAll)
MovieRouter.get('/:id', MovieController.getOne)

module.exports = MovieRouter