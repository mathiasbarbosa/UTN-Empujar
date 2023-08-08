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
    let findUser = users.find( u => u.firstName === userName)
    // if ((userName === user[].firstName) && (userPassword === user.password))

    if ( findUser !==  undefined && findUser.password === password) {
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


function registerUser () {
    alert('bienvenido le vamos a solicitar sus datos para generar el usuario')
    let firstName = prompt('ingrese su nombre').toLowerCase().trim()
    let lastName = prompt('ingrese su apellido').toLowerCase()
    let password = prompt('ingrese el contraseña').toLowerCase().trim()
    let email = prompt('ingrese su correo').toLowerCase().trim()
    if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
        let user = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            cuenta: {
                cbu:  Math.floor((Math.random() * 10000)) + 1,
                saldo: 0,
            }
        }
        users.push(user)
        console.log(users);
        alert(`Usuario ${user.firstName} registrado correctamente`)
    }
}

// do {
//     userName = prompt('ingrese el nombre').toLowerCase().trim()   
//     userPassword = prompt('ingrese contraseña').trim();
//     validate =  login() // true || false 
//     if (validate === false) {
//         confirmValidate = confirm('queres volver a ingresar los datos')
//     }
    
// } while (!validate && confirmValidate === true);



// 2. Información de la cuenta: Mostrar información relevante de la cuenta del usuario, como el saldo disponible, el número de cuenta, el nombre del titular, etc.
// registrar usuarios 
// leer datps de un usuario
// depesitar en la cuenta 





let option = prompt("Bienvenido al home banking, que desea hacer? \n 1-iniciar sesion \n 2-registrate \n 3- salir")
let userName;
let userPassword; 
let validate;
let confirmValidate;

while (option != '3') {
    
    switch (option) {
        case '1':
            userName = prompt('ingrese el nombre').toLowerCase().trim()   
            userPassword = prompt('ingrese contraseña').trim();
            confirmValidate = login()
            break;
        
        case '2':
            // registrar usuario 
            registerUser()
        break;

        default:
            break;
    }

    if (confirmValidate == true) {
        break
    }
    option = prompt("Bienvenido al home banking, que desea hacer? \n 1-iniciar sesion \n 2-registrate \n 3- salir")
}

// Leer datos de un usuario.
// depositar en la cuenta.
