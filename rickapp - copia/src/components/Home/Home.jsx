import React from 'react';
import { useEffect, useState } from 'react'
import Character from '../Character/Character';
import Pagination from '../Pagination/Pagination';
import '../../app.css'


const Home = ({user, setUserLogin}) => {
    // const [userLogin, setUserLogin] = useState()
    const [personajes, setPersonajes] = useState()
    const [index, setIndex] = useState(4)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${index}`)
            .then((response) => response.json())
            .then((data) => setPersonajes(data.results))
            .catch((err) => console.error(err))
    }, [index])

    // useEffect(() => {
    //     let user =  JSON.parse( localStorage.getItem('user'))
    //     console.log(user);
    //     setUserLogin(user)
    // }, [])

    const handlePrev = () => {
        setIndex(prevValue => prevValue - 1)
    }

    const handleNext = () => {
        setIndex(prevValue => prevValue + 1)
    }

    const addFavorite = (e) => {
        const id = e.target.parentNode.id
        console.log(id);
        let find = personajes.find( p => p.id == id)
        setUserLogin({...user, favoritos: [...user.favoritos, find]})
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
