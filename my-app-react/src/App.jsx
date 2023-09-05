
import './App.css'
import Saludo from './components/saludo/Saludo'
import imgPicasso from '../public/imgs/picasso.jpg'
import imgDavinci from '../public/imgs/davinci.jpg'
import imgVangogh from '../public/imgs/vangogh.jpg'
import EjemploUseState from './EjemplouseState'
import EjemploUseEffect from './ejemploUseEffect'
import { useState } from 'react'
import { sculptureList } from './data' // array de objetos 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Productos from './components/Productos'
import Home from './components/Home'

function App() {
  
// var artistas = [
//     {
//       nombre: "Pablo Picasso",
//       estilo: "Cubismo",
//       nacionalidad: "Español"
//     },
//     {
//       nombre: "Vincent van Gogh",
//       estilo: "Postimpresionismo",
//       nacionalidad: "Holandés"
//     },
//     {
//       nombre: "Leonardo da Vinci",
//       estilo: "Renacimiento",
//       nacionalidad: "Italian"
//     }
//     ]
  const [index, setIndex] =  useState(0)
  const [showMore, setShowMore] = useState(false)
  const hasNext = index < sculptureList.length - 1  // true o false

  const handleNext = () => {
    // index < sculptureList.length - 1 ? setIndex(index + 1) : setIndex(0) // true o false
    if (hasNext) {
      setIndex( index + 1)
    }else{
      setIndex(0)
    }
    // setIndex( (prevIndex) => prevIndex + 1 )
  }

  const handleShowMore = () => {
    setShowMore(!showMore) // ! el contrario
  }
  
  let obra = sculptureList[index]
  
  return (
    <Router>
    <>
      <Link to='/' >Home</Link>
      <Link to='/productos' >productos</Link>
      {/* <h1>Top de artistas musicales</h1>
      <Saludo name={'Pablo Picasso'} nacionalidad={'Español'} estilo={'Cubismo'} img={imgPicasso}/> 
      {/* <Saludo name={'Vincent van Gogh'} nacionalidad={'Holandés'} estilo={'Postimpresionismo'} img={imgVangogh}/>  */}
      {/* <Saludo name={'Leonardo da Vinci'} nacionalidad={'Italian'} estilo={'Renacimiento'} img={imgDavinci}/>  */} 
      {/* <EjemploUseState /> */}

      {/* <EjemploUseEffect /> */}
      {/* <button onClick={handleNext}>Siguiente</button>
      <h2>{obra.name}</h2>
      <button onClick={handleShowMore}> {showMore === true ? 'ocultar info' : 'mostrar mas'}</button>
      {showMore === true ? <p>{obra.description}</p> : '' }
      <img src={obra.url} alt='' /> */}

    </>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/productos' element={<Productos />} />  
      </Routes>
    </Router>
  )
}

export default App
