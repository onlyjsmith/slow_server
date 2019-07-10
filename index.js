var http = require('http')
var fs = require('fs')

const PORT = 8888
var res_json = fs.readFileSync('./response.json')

console.log(`starting server on ${PORT}`)

http.createServer(function (request, response) {
  setTimeout(() => {
    response.writeHead(200)
    response.write(res_json)
    response.end()
  }, 5000)
}).listen(PORT)  