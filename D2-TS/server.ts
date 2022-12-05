import http, { IncomingMessage, Server, ServerResponse } from 'http'
const hostname:string = '127.0.0.1';
const port:number = 5000;


const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
res.end(`<h3 style = " color:red;font-size:55px  " > hello welcome to ts tut.  </h3>`)
})

server.listen(port,()=>{
 console.log(`server is running at  http://${hostname}:${port}` )
}
)
    