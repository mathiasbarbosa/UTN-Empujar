import React from 'react';
import './character.css'
import { Link } from 'react-router-dom';

const Character = ({image, name, species, type, gender, status, id, user, addFavorite}) => {
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
                <button  disabled={user ? false : true} style={{backgroundColor:'transparent',border:'none' ,marginRight: '1rem'}}>
                    <i id={id} onClick={(e) => addFavorite(e.target.id)} style={{fontSize: '1.5rem', cursor:'pointer'} } className="bi bi-heart"></i>     
                </button>
                <Link to={`detailcharacter/${id}`} >Ver mas</Link>
            </div>
        </div>
    );
}

export default Character;






