console.log('hola munndo version typescript');
// function crearUsuario (nombre:string, apellido: string, email:string,  edad:number){
// }
var usuario = {
    id: 1,
    firstName: 'Carlos',
    lastName: 'fernandez',
    email: 'carlos@fernandez.com',
    edad: 50
};
function crearUsuario(user) {
    localStorage.setItem('usuario', JSON.stringify(user));
    if (localStorage.getItem('usuario')) {
        return true;
    }
    return false;
}
crearUsuario(usuario);
