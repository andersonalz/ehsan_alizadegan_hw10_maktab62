const http = require ('http')
const fs = require ('fs');

http.createServer((req , res) =>{
   if(req.url === '/home' && req.method === "GET"){
      fs.readFile('tamrin5.html' , 'utf8' , function ( error , page) {
         if(error){
            console.log("you have an error plese check");
            res.end('you have an error plese check')
         }else {
            res.end(page)
         }
      })
   }
}).listen(5000)