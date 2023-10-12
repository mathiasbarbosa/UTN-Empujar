console.log('hola munndo version typescript')
// declarar tipo primitivos
// let nombre: string = 'Juan'
// let numero: number = 10
// numero = 0.2
// let boolean: boolean = true

// boolean = false

// let fecha: Date 

// fecha = new Date()

interface User {
  id: number
  firstName:string,
  lastName: string,
  email: string, 
  edad: number
}


// function crearUsuario (nombre:string, apellido: string, email:string,  edad:number){

// }


let us: User = {
  id: 1,
  firstName:'Carlos',
  lastName: 'fernandez',
  email: 'carlos@fernandez.com', 
  edad: 50
} 

function crear (user:User): boolean {
    localStorage.setItem('usuario', JSON.stringify(user))
    if (localStorage.getItem('usuario')) {
      return true
    }
    return false
  }


  crear(us)



