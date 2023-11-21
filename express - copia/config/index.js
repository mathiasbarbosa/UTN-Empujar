const mysql = require('mysql2/promise')

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'movies_db'
}

const connection = async () => {
  return await  mysql.createConnection(config)
} 

module.exports = connection