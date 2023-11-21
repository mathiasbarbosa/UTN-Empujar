const MovieModel = require("../model");

class MovieController {
  static async getAll(req, res){
    const {error, data} = await MovieModel.getAll()
    if (error) {
      res.status(500).send({message: data})
    }
    // res.send(data)
    res.render('index', {content:'home',movies:data})
  }

  static async getOne(req, res){
    const {error, data} = await MovieModel.getOne(req.params.id)
    if (error) {
      res.status(500).send({message: data})
    }
    // return res.json(data)
    res.render('index', {content:'detail',movie:data})

  }
}

module.exports = MovieController