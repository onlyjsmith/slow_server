var http = require('http')
var fs = require('fs')

const PORT = 8888
const delay_ms = 5000
var res_json = fs.readFileSync('./response_459.json')

console.log(`starting server on ${PORT}`)

http.createServer(function (request, response) {
  console.log(`${new Date().toISOString()} started on delay of ${delay_ms}`)
  setTimeout(() => {
    response.setHeader('Content-Type', 'application/json')
    response.statusCode = 200
    response.end(res_json)
  }, delay_ms)
}).listen(PORT)  