import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



const NavBar = () => {
    return (
        <header > 
            <h2 style={{textAlign:'center'}}>Rick and Morty app</h2>  
            <div style={{display:'flex', justifyContent:'center', gap: '1rem'}}>
                <Link to='/' className='itemNav'  >Home </Link>
                {/* <Link to='/detailcharacter/1'>detail </Link> */}
                <Link to='/registeruser'  className='itemNav'  >Registrate</Link>
                <Link to='/favoritos'  className='itemNav'  >Favoritos</Link>
            </div>
        </header>
    );
}

export default NavBar;
