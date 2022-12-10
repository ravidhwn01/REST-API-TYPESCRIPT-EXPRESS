import express, { Express, Request, Response } from "express";
import apiRouter from "./router/apiRouter";
const app: Express = express();
const hostname: string = "127.0.0.1";
const port: number = 5000;
// import dotenv from 'dotenv';
// dotenv.config();
// const port = process.env.PORT;

/**
 * response.send() -> for html tag response
response.sendFile() -> for html Page response
response.json() -> for json response
response.download() -> for downloadable response
 */

app.get("/", (req: Request, res: Response) => {
  res.send(` <h3 style = "color:red;" >Express with typescript</h3> `);
});

app.use('/api', apiRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
