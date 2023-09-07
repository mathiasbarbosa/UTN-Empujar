import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import { useParams } from 'react-router-dom';

const DetailCharacter = () => {
    

    let {id} = useParams()
    // const currentUrl = window.location.href;

    // Analizar la URL para extraer el ID
    // const id = currentUrl.split('/').pop(); // Esto asume que el ID es el último segmento de la URL
    console.log(id);


    const [character, setCharacter] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <>
        {character ? <Character {...character} />
        : <p>cargando</p>
        }
        </>
    
    );
}

export default DetailCharacter;
