import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Character from './components/Character/Character';
import Pagination from './components/Pagination/Pagination';
import './app.css'
import Home from './components/Home/Home';
import DetailCharacter from './components/DetailCharacter/DetailCharacter';
function App() {

 
  return (
    <Router>
    <>
      <header > 
        <h2 style={{textAlign:'center'}}>Rick and Morty app</h2>  
        <Link to='/' style={{margin:'auto'}}>Home </Link>
        {/*<Link to='/detailcharacter/1'>detail </Link> */}
      </header>
      {/* <main>
        {
          personajes ? 
            personajes.map( (personaje) => <Character key={personaje.id} {...personaje} />)
          : <p>Cargando...</p>
        }
      </main>

      <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext} />  */}

    
    
    </>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/detailcharacter/:id' element={<DetailCharacter />} /> 
      </Routes>
    </Router>
  )
}

export default App
