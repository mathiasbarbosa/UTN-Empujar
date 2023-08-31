import React from 'react';
import './Saludo.css'


const Saludo = ({name, nacionalidad, estilo, img}) => {

    return (
        <div className='card'>
            <div>
                <h2>Nombre del artista: {name}</h2>
                <h3> Nacionalidad: {nacionalidad} </h3>
                <h3> Estilo artistico: {estilo} </h3>
            </div>
            <img src={img}/>
        </div>
    );
}

export default Saludo;




