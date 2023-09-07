import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoritos: []
}


const Register = () => {
    // const navigate = useNavigate()

    const [user, setUser] = useState(initialValues)

    const handleChange = (e) => {
        // user['firstname']
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log(` valor del input ${e.target.value}, Propiedad: ${[e.target.name]}`);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password} = user
        if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
            localStorage.setItem('user', JSON.stringify(user))
            window.location = '/'
            // TODO useNavigate 
            // navigate('/')
        }else{
            alert('Tenes que completar todos los campos')
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
                <label>
                    Nombre:
                    <input
                        value={user.firstName}
                        onChange={handleChange}
                        name='firstName'
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        value={user.lastName}
                        onChange= {handleChange}
                        name='lastName'
                    />
                </label>
                <label>
                    Email: 
                    <input
                        value={user.email}
                        onChange= {handleChange}
                        type='email'
                        name='email'
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        value={user.password}
                        onChange= {handleChange}
                        type='password'
                        name='password'
                    />
                </label>
                <button type='submit'>¡Registrate!</button>
            </form>
                
        </>
    );
}

export default Register;
