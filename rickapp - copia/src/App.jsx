import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Character from './components/Character/Character';
import Pagination from './components/Pagination/Pagination';
import './app.css'
import Home from './components/Home/Home';
import DetailCharacter from './components/DetailCharacter/DetailCharacter';
import RegisterUser from './components/RegisterUser/RegisterUser';
import Favoritos from './components/Favoritos/Favoritos';
function App() {

  const [userLogin, setUserLogin] = useState()
 
  useEffect(() => {
    let user =  JSON.parse( localStorage.getItem('user'))
    console.log(user);
    setUserLogin(user)
}, [])

  return (
    <Router>
    <>
      <header > 
        <h2 style={{textAlign:'center'}}>Rick and Morty app</h2>  
        <div style={{display:'flex', justifyContent:'center', gap: '1.5rem'}}>
          <Link to='/' >Home </Link>
          <Link to='/registeruser' >Register</Link>
          <Link to='/favoritos' >favoritos</Link>
          {/*<Link to='/detailcharacter/1'>detail </Link> */}
        </div>
      </header>
    
    </>
      <Routes>
        <Route path='/' element={<Home user={userLogin} setUserLogin={setUserLogin} />} /> 
        <Route path='/registeruser' element={<RegisterUser />} /> 
        <Route path='/favoritos' element={<Favoritos user={userLogin} />} /> 
        <Route path='/detailcharacter/:id' element={<DetailCharacter />} /> 
      </Routes>
    </Router>
  )
}

export default App
