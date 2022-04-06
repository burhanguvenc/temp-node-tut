const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to Home Page')
}
if(req.url === '/about'){
    res.end('Here it is')
}
res.end(`<h1>Opps!</h1><p>We cant seem to</p><a href="/">Back Home</a>`)
})
server.listen(5000)