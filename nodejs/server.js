const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  // request.method
  const url = request.url
  console.log(url);
  if (url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hola Mundo desde Node.js')
  }else if( url == '/users'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html', 'charset=utf-8')
    response.end('<h1> Listar usuarios </h1>')
  }
})

server.listen(port, hostname, () => {
  console.log(`Servvidor corriendo en http://${hostname}:${port}`)
})


// TODO CORS policy: No 'Access-Control-Allow-Origin'