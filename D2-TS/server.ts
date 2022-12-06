import http, { IncomingMessage, Server, ServerResponse } from 'http'
import os from 'os'

import fs from "fs";

const hostname:string = '127.0.0.1';
const port:number = 5000;
import { StringUtil } from './strinutils';
import { MathUtil } from './mathUtil';

const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');

    //node js routing
    let url:string | undefined = req.url; 
    let method:string | undefined = req.method;
    let result:string = '';

if(url ==='/' && method ==='GET'){
  result = `welcome to node js with TS tutorial `;

} else if(url ==='/about'&& method ==='GET'){
  result = ` welcome to About page`;
}
 else if(url ==='/service'&& method ==='GET'){
  result = ` welcome to service page`;
}
 else if(url ==='/contact'&& method ==='GET'){
  result = ` welcome to contact page`;
} 
else{
  result = ` page not found!`
}

res.end(`${result}`)

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

  // fs.readFile('json.json','utf-8',(error ,result)=>{
  //   // if(error){
  //   //     console.log(error)
  //   // }
  //   // fs.appendFile('json.json', "result is added ", 'utf-8', (err)=>{
  //           if(error){
  //               console.log(error)
  //           }
  //   res.end(result)
          
  
  // })
    // string util 
    // let name:string = 'ravidhawan'
    // let length:number = StringUtil.printLength(name);
    // console.log(length)
    //       res.end(`lenght is : ${length}`) 
    // let name : string =  'ravi dhawan'
    // let result1: string = StringUtil.printTriagle(name)
    // res.end(result1)
    

    // math util
    // let num:number = 15;
    // let output:string = MathUtil.PrintMathTable(num);
    // res.end(`${output}`)
})
server.listen(port,hostname,()=>{
 console.log(`server is running at  http://${hostname}:${port}` )
}
)
    