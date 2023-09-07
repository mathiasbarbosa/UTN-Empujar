import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './app.css'
import { AppRouter } from './router';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const userValidate = JSON.parse( localStorage.getItem('user')) 
  setUser(userValidate)    
  }, [])

  return (
    <Router>
      <NavBar />
      <AppRouter user={user} setUser={setUser}  />
    </Router>
  )
}

export default App
