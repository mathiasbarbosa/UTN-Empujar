const MovieModel = require("../model")

class MovieController {
  static async getAll(req, res){
    // Vamos al modelo y enviar la response
    const {error, data} = await MovieModel.getAll()
    if (error) return res.status(500).json({error})

    // return res.json(data)
    return res.render('index', {content: 'home', movies: data})
  }

  static async getOne(req, res){
    const {error, data} = await MovieModel.getOne(req.params.id)
    if (error) return res.status(500).json({error})
    // return res.json(data)
    return res.render('index', {content: 'detail', movie: data})
  }
}

module.exports = MovieController