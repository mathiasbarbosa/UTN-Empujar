const connection = require('../config/index')


class GranjaModelo{

  static async getAll(){
    try{
      const mysqlClient = await connection()
      const [result, tableInfo] = await mysqlClient.query(`select granjas.nombre, granjas.precio,granjas.id, categorias.categoria from granjas
      inner join categorias on categorias.id = granjas.categoria_id`)
      if (result) return {data:result, error:false}
      return {data:null, error:true}
    }catch(error){
      return {data: null, error: error}
    }
  }

  static async getByNombre(nombre){
    console.log(nombre);
    try {
      const mysqlClient = await connection()
      const [result, tableInfo] = await mysqlClient.query(`select * from granjas
      where nombre =  ?`, [nombre])
      if (result) return {data:result, error:false}
      return {data:null, error:true}
    } catch (error) {
      return {data: null, error: error}
    }
  }

  static async create(body){
    const {nombre, precio, categoria_id} = body
    try {
      const mysqlClient = await connection()
      const [response] =  await mysqlClient.query(
        `insert into granjas(nombre, precio, categoria_id)
        values(?, ?, ?)
        `,
        [nombre, precio, categoria_id]
      )
      const data = {...body, id: response.insertId}
      if(response.affectedRows === 1) return {data: data, error: false}
      return {data: null, error: true}
    } catch (error) {
      return {data: null, error: error}
    }
  }

  static async update(body, id){
    const camposActulizar = []
    const valoresActulizar = []
    for( const [key, value] of Object.entries(body)){
      if (key !== id && value !== undefined) {
        camposActulizar.push(`${key} = ? `)
        valoresActulizar.push(value)
      }
    } // {nombre: 'Naranja'} {key: value}
    
    const campos = camposActulizar.join(',')
    console.log(campos);
    valoresActulizar.push(id)

    try {
      const mysqlClient = await connection()
      const [response] = await mysqlClient.query( 
        `update granjas set ${campos} where id = ?`,
      valoresActulizar)
      console.log(response);
      if(response.affectedRows === 1) return {data: 'Actualizado', error: false}
      return {data: null, error: true}
    } catch (error) {
      return {data: null, error: error}
    }
  }

  // TODO DELETE
}

module.exports = GranjaModelo