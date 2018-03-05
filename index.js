console.log("Yeet het werkt")

var fs = require("fs")
var http = require('http')

var dirTree = require('directory-tree');
var tree = dirTree('/some/path');


http.createServer(onRequest).listen(8000)

function onRequest(req, res) {
  console.log("Request")

  if(req.url == "/") {
    res.writeHead(200,{"Content-Type": "text/html"})
    fs.createReadStream("./assets/index.html").pipe(res);
  }
  if(req.url == "/about") {
    res.writeHead(200,{"Content-Type": "text/html"})
    fs.createReadStream("./assets/pages/about.html").pipe(res);
  }
  if(req.url == "/cage") {
    res.writeHead(200,{"Content-Type": "image/jpg"})
    fs.createReadStream("./assets/img/cage.jpg").pipe(res);
  }
  else if (req.url == "/kittens") {
    response.end("<h1> kittens </h1>")
  }
  else {
    res.writeHead(200,{"Content-Type": "text/html"})
    fs.createReadStream("./assets/pages/404.html").pipe(res);

  }

}
