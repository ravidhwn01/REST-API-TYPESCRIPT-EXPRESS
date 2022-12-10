
import express, { Express, Request, Response } from 'express';
const app: express.Application = express();
const hostname: string = "127.0.0.1";
const port: number = 5000;

/**
 * response.send() -> for html tag response
response.sendFile() -> for html Page response
response.json() -> for json response
response.download () -> for downloadable response
 */

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    }
);