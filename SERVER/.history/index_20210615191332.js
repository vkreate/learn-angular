const http = require('http')

const host = '127.0.0.1'
const port = 4200

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello World')
    res.end()
})

server.listen(port, host, () => {
    console.log(`Server is running on port ${port}`)
})