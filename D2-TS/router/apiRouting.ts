import { IncomingMessage, ServerResponse } from "http";
import http  from "http";



export class ApiRouter {
    public static mapRoutes(req:IncomingMessage,res:ServerResponse){
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
    }
}