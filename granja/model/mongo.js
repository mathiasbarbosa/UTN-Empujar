const {connectToMongoDB, disconnectToMongoDB} = require('../config/mongodb.config')

class GranjaModel{
  static async getAll(){
    try {
      const clientDB = await connectToMongoDB()
      if (!clientDB) return {data:null, error: 'Error al establecer la conexion'}
      const granjas = await  clientDB.db('granjas').collection('granjas').find().toArray()
      await disconnectToMongoDB()
      if (granjas) return {data:granjas, error:false}
      return {data:null, error:true}
    } catch (error) {
      return {data:null, error: true}
    }
  }

  static async getByNombre(nombre){
    try {
      const clientDB = await connectToMongoDB()
      const result = await clientDB.db('granjas').collection('granjas').findOne({nombre: nombre })
      await disconnectToMongoDB()
      console.log(result);
      if (result) return {data:result, error:false}
      return {data:null, error:true}
    } catch (error) {
      return {data:null, error: true}
    }
  }

  static async getAllByCategory(categoria){
    try{
      const clientDB = await connectToMongoDB()
      const granjas = await clientDB.db('granjas').collection('granjas').find({categoria: categoria}).limit(3).toArray()
      await disconnectToMongoDB()
      if (granjas) return {data: granjas, error: false}
      return {data:null, error:true}
    }catch (error) {
      return {data:null, error: true}
    }
  }
}


module.exports = GranjaModel