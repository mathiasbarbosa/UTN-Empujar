import React, { useEffect, useState } from 'react';

const EjemploUseEffect = () => {
    
    const [personaje, setPersonaje] = useState({})
    
    
    
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json())
        .then((data) => setPersonaje(data))
        .catch((err) => console.log(err))

        return console.log('se ejecuta al salir');
    }, [])
    
    
    return (
        <div>
            {
            personaje.name === undefined ? "cargando..." : 
            <h1>Nombre: {personaje.name}</h1>
            
            }
            {// TODO cambiar personaje 
            }            
            
        </div>
    );
}

export default EjemploUseEffect;
