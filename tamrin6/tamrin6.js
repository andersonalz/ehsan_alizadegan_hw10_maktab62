const http = require('http')
const fs = require('fs');


http.createServer((req, res) => {
   if (req.url === '/home' && req.method === "GET") {
      fs.readFile('./html.html', 'utf8', function (error, page){
         if (error) {
            console.log("you have an error plese check");
            res.end('you have an error plese check')
         } else {
            res.end(page)
         }
      });
   } else if(req.url === '/css.css' && req.method === "GET"){
      fs.readFile('./css.css', 'utf8', function (error, page) {
         if (error) {
            console.log("you have an error plese check");
            res.end('you have an error plese check')
         } else {
            res.end(page)
         }
      })
   }   else if(req.url === '/js.js' && req.method === "GET"){
      fs.readFile('./js.js', 'utf8', function (error, page) {
         if (error) {
            console.log("you have an error plese check");
            res.end('you have an error plese check')
         } else {
            res.end(page)
         }
      })
   }  else if(req.url === '/1.jpeg' && req.method === "GET"){
      fs.readFile('./1.jpeg', function (error, page) {
         if (error) {
            console.log("you have an error plese check");
            res.end('you have an error plese check')
         } else {
            res.end(page)
         }
      })
   }  
      
}).listen(5000)


