const dotenv = require('dotenv')
dotenv.config()
const {MongoClient} = require('mongodb')

const URL = process.env.MONGO_URL

const client = new MongoClient(URL)

const connectToMongoDB = async () => {
  try{
    await client.connect()
      console.log('Conectado a Mongo db');
      return client
  }catch(error){
    console.error('Error al conectar a Mongo DB ' +  error)
    return null
  }
}

const disconnectToMongoDB = async () => {
  try {
    await client.close()
    console.log('Desconectado de Mongo DB');
  } catch (error) {
    console.error('Error al desconectar de Mongo DB ' + error);
  }
}

module.exports = {connectToMongoDB, disconnectToMongoDB}