import React, { useState } from 'react';
import './registerUser.css'


const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoritos: []
}

const RegisterUser = () => {

    const [user, setUser] = useState(initialValue)

    const handleChange = (e) => {
        console.log(e.target.name);
        setUser({...user, [e.target.name]: e.target.value.trim()})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password} = user
        if(firstName != '' && lastName != '' && email != '' && password != ''){
            alert('register user ok')
            e.target.reset()
            localStorage.setItem('user', JSON.stringify(user))
            window.location = '/'
        }else{
            alert('ingrese todos los datos')
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Nombre:
                    <input
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        name='firstName'
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                        name='lastName'
                    />
                </label>
                <label>
                    Email: 
                    <input
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                        type='email'
                        name='email'
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                        type='password'
                        name='password'
                    />
                </label>
                <button type='submit'>¡Registrate!</button>
            </form>
            {/* <div>
                <h3>{user.firstName}</h3>
                <h3>{user.lastName}</h3>
                <h3>{user.email}</h3>
            </div> */}
        </div>
    );
}

export default RegisterUser;
