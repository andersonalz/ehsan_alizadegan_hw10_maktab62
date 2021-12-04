const http = require('http')
const port = 5000

http.createServer((req , res) =>{
   if (req.url === '/' && req.method === "GET"){
      res.end('Hello Web Application') 
   }else if(req.url === '/AboutMe' && req.method === "GET"){
      res.end('About Me')
   }else if(req.url === '/aboute me 2' && req.method === "GET"){
      res.end('aboute me 2')
   }else if(req.url === '/aboute me 3' && req.method === "GET"){
      res.end('aboute me 3')
   }else if(req.url === '/aboute me 4' && req.method === "GET"){
      res.end('aboute me 4')
   }else if(req.url === '/aboute me 5' && req.method === "GET"){
      res.end('aboute me 5')
   }else{
      res.end("not found")
   }

}).listen(port)