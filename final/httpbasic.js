const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    //home page
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage) //파일 안에 작성된 내용을 모두 보여줌 
        res.end()
    }
    //about pag
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    //Image
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //404
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(8000)