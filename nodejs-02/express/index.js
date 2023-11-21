const express = require('express')
const films = require('../films.json')
const Movie = require('./model/movie.js')
const path = require('path')


const app = express()
const port  = process.env.PORT || 3000
console.log(__dirname);
app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')
app.set('static', path.join(__dirname, 'public'))


app.use((req,res, next) => {
  console.log('mi primer middleware');
  next()
} )



app.use(express.json())

// app.use((req, res, next) => {
//   if(req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   // aca solamente van a llegar las solicitudes que sean POST
//   let body = ''
//   req.on('data',(data) => {
//     console.log(data);
//     body += data.toString()
//     console.log(body);
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     console.log(data);
//     // res.end(JSON.stringify(data))
//     req.body = data
//     next()
//   })
// })

app.get('/movies', (req, res) => {
  // res.json(films)
  res.render('index', {mensaje: 'Te mandamos un mensaje'})
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  if (!id) res.status(404).send('ID NO encontrado')

  const film = films.findIndex( film => film.imdbID == id)
  res.status(200).json(films[film])
})

app.post('/movies', (req, res) => {
  console.log(req.body);
  let newMovie = Movie.parse(req.body) 
  if (!newMovie) return res.status(404).send('Datos no validos')

  films.push(newMovie) //* conectarse con la db
  res.status(201).json(newMovie)
})

app.use('*',(req, res) => {
  res.status(404).send('Pagina no encontrada')
})


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/movies`);
})


