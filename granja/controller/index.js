// const GranjaModelo = require("../model");
const GranjaModelo = require('../model/mongo')

class GranjasController{
  static async getAll(req, res){
    const {nombre, categoria} = req.query // precio
    if (nombre) {
      const {data, error} = await GranjaModelo.getByNombre(nombre)
      if (error) return res.status(500).json({error: 'Error en la solicitud'})
      return res.status(200).json(data)
    }

    if(categoria){
      console.log('Recibimos categoria');
      const {data, error} = await GranjaModelo.getAllByCategory(categoria)
      if (error) return res.status(500).json({error: 'Error en la solicitud'})
      return res.status(200).json(data)
    }

    const {data, error} = await GranjaModelo.getAll()
    if (error) return res.status(500).json({error: 'Error en la solicitud'})
    res.status(200).json(data)
  }

  static async create (req, res){
      console.log(req.body);
      const nuevoItem = req.body
      const {data, error} = await GranjaModelo.create(nuevoItem)
      if(error) return  res.status(500).json({error: 'Error en la solicitud'})
      res.status(201).json(data)
  }

  static async update(req, res){
    const id = req.params.id
    const body = req.body

    const {data, error} = await GranjaModelo.update(body, id)

    if (error) return res.status(500).json({error: 'Error en la solicitud'})
    return res.status(200).json(data)
  }
}

module.exports = GranjasController