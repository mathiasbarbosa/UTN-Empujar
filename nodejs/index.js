const fs = require('node:fs/promises')

const readFile = async (ruta) => {
  try {
    // lo que queremos hacer
    const contenido = await fs.readFile(ruta,'utf-8')
    console.log(contenido);
  } catch (error) {
    // manejar el error
    console.error('Error al leer el archivo:', error);
  }
}

readFile('notas.txt')

const writeFile = async (ruta, contenido) => {
  try {
    const data = await fs.writeFile(ruta, contenido)
    // console.log(data);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

writeFile('otro.txt', 'Estamos escribiendo en un archivo desde node JS usando el modulo fs')

// TODO Eliminar archivos y listar archivos de un directorio

// Implementando libreria propia
const {saludar} = require('./miLibreria.js')

saludar('Juan')