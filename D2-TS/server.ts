import http, { IncomingMessage, Server, ServerResponse } from 'http'
// const os = require('os');
import os from 'os'
const hostname:string = '127.0.0.1';
const port:number = 5000;


const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
// res.end(`hello welcome to ts tut.`)
// os module
let osData = {
    totalMemory : os.totalmem(),
    freeMemory:os.freemem(),
    homedir:os.homedir(),
    computerName:os.hostname()

}
res.end(JSON.stringify(osData))
})
server.listen(port,hostname,()=>{
 console.log(`server is running at  http://${hostname}:${port}` )
}
)
    