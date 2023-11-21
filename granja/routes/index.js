const express = require('express')
const GranjasController = require('../controller')


const router = express.Router()


router.get('/granjas', GranjasController.getAll)
router.post('/granjas', GranjasController.create)
router.put('/granjas/:id', GranjasController.update)


module.exports = router