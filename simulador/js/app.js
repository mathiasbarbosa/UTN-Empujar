// ** Variables
let form = document.getElementById('form_login')
let userName = document.getElementById('username')
let password = document.getElementById('password')
const users = [
    // TODO hacer un alias
    {
        firstName: 'carlos',
        lastName: 'gonzalez',
        password: '1234',
        email: 'carlos@gonzalez.com',
        cuenta: {
            cbu: 4364,
            alias: '',
            saldo: 0
        }
    },
    {
        firstName: 'pepe',
        lastName: 'fernandez',
        password: 'soypepito',
        email: 'pepe@fernandez.com',
        cuenta: {
            cbu: 2233,
            alias: '',
            saldo: 0
        }
    },
]

console.log(form);
console.dir(userName);
console.log(password);

// ** Funciones 
function login(username, password){

 
    let findUser = users.find( u => u.firstName === username)
    // if ((userName === user[].firstName) && (userPassword === user.password))

    if ( findUser !==  undefined && findUser.password === password) {
        
        console.log('Bienvenido: ' + username)
        return true
    }else{
        // let h1 = document.createElement('h1');
        // console.dir(h1);
        // h1.textContent = 'No estas registrado';
        // h1.style.color = 'red'
        // div.appendChild(h1);
        return false
    }

}

// function submitForm(params) {
    
// }

// form.addEventListener('submit', submitForm )


// form.addEventListener('submit', function(){
    
// } )


// ** Ejecucion programa principal 

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target);
    console.log(userName.value);
    let user = userName.value
    let pass = password.value
    let validate = login(user, pass)
    if (validate == true) {
        window.location = '../index.html'
    }
    form.reset()
})

