const express = require('express')
const dotenv = require('dotenv') // Aca usamos dotenv PERO NODE recientemente saco el modulo nativo para las variables de entorno
dotenv.config()
const PORT = process.env.PORT || 3000
const server = express()
const router = require('./routes/index')

server.use(express.json())
// /api/granjas
server.use('/api', router)

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/api/granjas`);
})

