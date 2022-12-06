import http, { IncomingMessage, request, Server, ServerResponse } from 'http'
import os from 'os'

import fs from "fs";
import { ApiRouter } from "./router/apiRouting";

const hostname:string = '127.0.0.1';
const port:number = 5000;
import { StringUtil } from './strinutils';
import { MathUtil } from './mathUtil';

const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type','application/json');

    
// ApiRouter.mapRoutes(req,res);

// Url and post 
try {
  if(req.url === '/user' && req.method ==='POST'){
    let body : any = '';
    req.on('data', (chunk)=>{
        body +=chunk;
    }).on('end', ()=>{
      let formData = JSON.parse(body);
      console.log(formData);
      res.end(JSON.stringify(formData))
    })
  }
} catch (error) {
  console.log(error)
}



})
server.listen(port,hostname,()=>{
 console.log(`server is running at  http://${hostname}:${port}` )
}
)
    