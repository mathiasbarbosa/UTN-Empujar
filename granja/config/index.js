const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

const config = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'granjas'
}

const mysqlClient  = async () => {
  const connection = await mysql.createConnection(config)
  return connection
} 

module.exports = mysqlClient