let div = document.querySelector('#container')


/* 1. inicio de sesión: Permitir a los usuarios iniciar sesión con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria. */
// let firstName = 'carlos';
// let lastName = 'gonzalez';
// let password = '1234';
// let email = 'carlos@gonzalez.com'

let user = {
    firstName: 'carlos',
    lastName: 'gonzalez',
    password: '1234',
    email: 'carlos@gonzalez.com'
}

let users = [user]

function login(){

    div.innerHTML = " "

    if ((userName === user.firstName) && (userPassword === user.password)) {
        let h1 = document.createElement('h1');
        h1.textContent = 'Bienvenido: '+ userName;
        div.appendChild(h1);
        console.log('Bienvenido: ' + userName)
        return true
    }else{
        let h1 = document.createElement('h1');
        console.dir(h1);
        h1.textContent = 'No estas registrado';
        h1.style.color = 'red'
        div.appendChild(h1);
        return false
    }

}


let userName;
let userPassword; 
let validate;
let confirmValidate;
do {
    userName = prompt('ingrese el nombre').toLowerCase().trim()
    userPassword = prompt('ingrese contraseña').trim();
    validate =  login()
    if (validate === false) {
        confirmValidate = confirm('queres volver a ingresar los datos')
    
    }
    
} while (!validate && confirmValidate === true);




// 2. Información de la cuenta: Mostrar información relevante de la cuenta del usuario, como el saldo disponible, el número de cuenta, el nombre del titular, etc.


