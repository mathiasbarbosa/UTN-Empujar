const Movie = require("./movie")
const films = require('../../films.json')


class MovieModel {
  static async getAll(){
    try {
      const response = await films
      return {error: false, data: response}
    } catch (error) {
      return {error: true, data: error}
    }
  }

  static async getOne(id){
    try {
      const response = films.find( film => film.imdbID == id)
      if(!response) throw new Error ('Cannot find film')
      return {error:false, data: response}
    } catch (error) {
      return {error: true, data: error}
    }
  }
}

module.exports = MovieModel
