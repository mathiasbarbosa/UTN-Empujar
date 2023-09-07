import React from 'react';
import { useEffect, useState } from 'react'
import Character from '../Character/Character';
import Pagination from '../Pagination/Pagination';
import '../../app.css'


const Home = ({user, setUser}) => {

    const [personajes, setPersonajes] = useState()
    const [index, setIndex] = useState(1)
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

    const addFavorite = (id) => {
        const findPersonaje = personajes.find( personaje => personaje.id == id)
        console.log(findPersonaje);
        setUser({...user, favoritos:[...user.favoritos, findPersonaje]}) 
    }

    return (
        <>
            <main>
                {
                    personajes ?
                        personajes.map((personaje) => <Character key={personaje.id} {...personaje} user={user} addFavorite={addFavorite} />)
                        : <p>Cargando...</p>
                }

            </main>
            <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext} /> 

        </>
    );
}

export default Home;
