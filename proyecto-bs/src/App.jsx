
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { axiosInstance } from './servicios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const [productos, setProductos] = useState()
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    axiosInstance.get('/products')
      .then(res => {
        if(res.status === 200) setProductos(res.data)
        else throw new Error('Error en la solicitud')
      })
      .catch(() => {
        MySwal.fire({
          title: <strong>Error en la solicitud</strong>,
          html: <i>You clicked the button!</i>,
          icon: 'error'
        })
      })
  }, [])


  return (
    <>
    <Router> 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/carrito'>
              Carrito
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main className='d-flex flex-wrap gap-3 p-3 justify-content-center'>
        {productos ? 
          productos.map( producto => {
            const {id, title, price, image, description} = producto
            return(
              <Card key={id} style={{ width: '18rem' }}>
              <Card.Img variant="top" style={{ width: '150px' }} src={image} />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                  {description.slice(0, 50)}...
                </Card.Text>
                <small>{price}</small>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )

          })
          :
          <h2 style={{textAlign: 'center'}}>No hay productos</h2>
      }
      </main>
    
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/carrito' element={<h1>Carrito</h1>} />
      </Routes>
  </Router>

    </>
  )
}

export default App
