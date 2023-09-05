import React from 'react';
import { useEffect, useState } from 'react'
import Character from '../Character/Character';
import Pagination from '../Pagination/Pagination';
import '../../app.css'


const Home = () => {

    const [personajes, setPersonajes] = useState()
    const [index, setIndex] = useState(4)
    console.log(personajes);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${index}`)
            .then((response) => response.json())
            .then((data) => setPersonajes(data.results))
            .catch((err) => console.error(err))
    }, [index])

    const handlePrev = () => {
        setIndex(prevValue => prevValue - 1)
    }

    const handleNext = () => {
        setIndex(prevValue => prevValue + 1)
    }
    return (
        <>
            <main>
                {
                    personajes ?
                        personajes.map((personaje) => <Character key={personaje.id} {...personaje} />)
                        : <p>Cargando...</p>
                }

            </main>
            <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext} /> 

        </>
    );
}

export default Home;
