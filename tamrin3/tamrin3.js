const http = require('http')
const port = 5000

http.createServer((req , res) =>{
if (req.url === '/' && req.method === "GET")
res.end(req.url)
}).listen(port)