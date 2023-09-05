import React from 'react';
import './character.css'
import { Link } from 'react-router-dom';

const Character = ({image, name, species, type, gender, status, id}) => {
    // const {image, name, species, type, gender, status} = personaje
    
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={image} alt={name} />
            </div>
            <div className='card_data'>
                <h3>{name}</h3>
                <h3>{species}</h3>
                <h4>{type}</h4>
                <span> {gender} </span>
                <p>{status}</p>
                <Link to={`detailcharacter/${id}`} >Ver mas</Link>
            </div>
        </div>
    );
}

export default Character;






