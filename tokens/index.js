const express = require('express')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()
const PORT = process.env.PORT || 3001
const secretKey = process.env.SECRET_KEY

const userToValidate = {username: 'Lucas', password: 'esta_es-mi_pass'}

const app = express()

app.use(express.json())

app.post('/login', (req, res) => {
  const {username, password} = req.body
  if(username === userToValidate.username && password === userToValidate.password){
    const token = jwt.sign({username}, secretKey, {expiresIn: '1h'})
    res.status(200).json({token})
  }else{
    res.status(401).json({error: 'Usuario o contraseña incorrectos'})
  }
})

app.get('/rutaprotegida', verifyToken, (req, res) => {
  const username = req.decoded.username
  res.status(200).json({message: `Hola ${username} estas en una ruta protegida`})
})

function verifyToken(req, res, next){
  const token = req.headers['authorization'] || null
  if (token){
    jwt.verify(token, secretKey,(err, decoded) => {
      err ? res.status(401).json({error: 'token invalidad'})
      : req.decoded = decoded 
      next()
    })
  } else{
    res.status(401).json({error: 'token no encontrado'})
  }
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})