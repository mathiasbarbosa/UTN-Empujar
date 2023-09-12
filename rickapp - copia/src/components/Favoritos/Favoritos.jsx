import React from 'react';
import Character from '../Character/Character';
import './favoritos.css'
const Favoritos = ({user}) => {
    
    
    return (
        <main>
            { user?.favoritos ? 
                user.favoritos.map( fav => <Character {...fav} key={fav.id}/>)
                :
                <h2>No hay personajes en favoritos</h2>
            }  
        </main>
    );
}

export default Favoritos;
