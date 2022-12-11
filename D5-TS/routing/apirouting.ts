import express, { Router } from 'express'
const ApiRouting :Router  = express.Router();

//logics
ApiRouting.post('/users', (req :express.Request , res:express.Response ) => {
    res.send(`data sent to user`);
});
ApiRouting.get('/', (req :express.Request , res:express.Response ) => {
    res.send(`user router`);
});


export default ApiRouting;