const films = require('../films.json')
const Movie = require('./movie')

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
      return {error: false, data: response}
    } catch (error) {
      return {error: true, data: error}
    }
  }
  static async createMovie(movie){
    try {
      const checkMovie = Movie.parse(movie) 
      const response = films.push(checkMovie)
      return {error: false, data: response}
    } catch (error) {
      return {error: true, data: error}
    }
  }

  static async updateMovie(id, movie){
    try {
      const findMovie = films.findIndex( film => film.imdbID == id)
      if (findMovie === -1)  return {error: true, data: 'Movie not found'}
      films[findMovie] = {...films[findMovie], movie}
      return {error: false, data: response}
    } catch (error) {
      return {error: true, data: error }
    }
  }

  static async deleteMovie(id){
    try {
      const findMovie = films.findIndex( film => film.imdbID == id)
      if (findMovie === -1)  return {error: true, data: 'Movie not found'}
      films.splice(findMovie, 1)
      return {error: false, data: films[findMovie]}
    } catch (error) {
      return {error: true, data: error }
    }
  }

}

module.exports = MovieModel