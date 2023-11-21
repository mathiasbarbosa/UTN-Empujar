// * Crear un servidor web utilizando los modulos nativos de Node js
//*  HTTP 
// * METODOS GET Y POST

const films = require('./films.json')
const http = require('node:http')
const port = 3000


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json; charset=utf-8 ' ) 
  let body = '';

  
  // TODO pasar a switch 
  if(req.url == '/movies' && req.method == 'GET'){
    res.end(JSON.stringify(films))
  }
  
  else if (req.url == '/movies' && req.method == 'POST') {
    req.on('data',(data) => {
      console.log(data);
      body += data.toString()
      console.log(body);
    })

    req.on('end', () => {
      const data = JSON.parse(body)
      console.log(data);
      res.end(JSON.stringify(data))
    })


  }

})


server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
})