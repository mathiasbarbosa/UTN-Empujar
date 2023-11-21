// const mysql = require('mysql2/promise')
const connection = require('../../config/index')

class MovieModel {
  static async getAll(){
    try {
      const db = await connection()
      const [response, tableinfo] = await db.execute('select * from movies')
      // const response = await films
      console.log(tableinfo);
      return {error: false, data: response}
    } catch (error) {
      return {error: true, data: error}
    }
  }

  // getOne
  // Post
  //update
  //delete

}

module.exports = MovieModel