import React from 'react';
import Character from '../Character/Character';

const Favoritos = ({user}) => {
    return (
        <>
        <h3 style={{textAlign: 'center'}}>Favoritos: {user.favoritos.length} </h3>
        <main>
        { user?.favoritos ? 
            user.favoritos.map( fav => <Character {...fav} key={fav.id}/>)
            :
            <h2>No hay personajes en favoritos</h2>
        }  
    </main>
        </>
    );
}

export default Favoritos;
