

const http = require('http')
const port = 5000

http.createServer((req , res) =>{
   if (req.url === '/' && req.method === "GET")
      res.end(JSON.stringify(
         { 
            a: 1,
            b : 2 
         }));
}).listen(port)