import http, { IncomingMessage, Server, ServerResponse } from 'http'
import os from 'os'

import fs from "fs";

const hostname:string = '127.0.0.1';
const port:number = 5000;
import { StringUtil } from './strinutils';

const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
// res.end(`hello welcome to ts tut.`)
// os module
// let osData = {
//     totalMemory : os.totalmem(),
//     freeMemory:os.freemem(),
//     homedir:os.homedir(),
//     computerName:os.hostname()

// }
// res.end(JSON.stringify(osData))

// file module
  // fs.readFile('server.txt','utf-8',(error ,result)=>{
  //   if(error){
  //       console.log(error)
  //   }
  //   fs.appendFile('server.txt', "result is added ", 'utf-8', (err)=>{
  //           if(err){
  //               console.log(err)
  //           }
  //           res.end(result)
  //   })
  // })

  fs.readFile('json.json','utf-8',(error ,result)=>{
    if(error){
        console.log(error)
    }
    // fs.appendFile('server.txt', "result is added ", 'utf-8', (err)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //       })
    // string util 
    // let name:string = 'ravidhawan'
    // let length:number = StringUtil.printLength(name);
    // console.log(length)
    //       res.end(`lenght is : ${length}`) 
    let name : string =  'ravi dhawan'
    let result1: string = StringUtil.printTriagle(name)
    res.end(result1)
  })
})
server.listen(port,hostname,()=>{
 console.log(`server is running at  http://${hostname}:${port}` )
}
)
    