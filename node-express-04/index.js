const express = require('express')
const films = require('./films.json')
const Movie = require('./model/movie.js')
const path = require('path')
const router = require('./router/index.js')

const app = express()
const port  = process.env.PORT || 3000
console.log(__dirname);

app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')
// app.set('static', path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/api', router)

app.use('*',(req, res) => {
  res.status(404).send('Pagina no encontrada')
})


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/api`);
})


