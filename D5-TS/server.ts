//create express server in typescript
const port:number = 5000;
import express, { Express, Request, Response } from "express";
import ApiRouting from "./routing/apirouting";
const app : Express= express();
const hostname: string = "127.0.0.1";
// configure express to receive form data
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
    res.send(`this is express server in typeScript`);
}
);

app.use('/api',ApiRouting);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

