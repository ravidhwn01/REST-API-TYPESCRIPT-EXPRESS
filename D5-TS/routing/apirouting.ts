import express, { Router } from 'express'
const ApiRouting :Router  = express.Router();

//logics
ApiRouting.post('/users', (req :express.Request , res:express.Response ) => {
    res.send(`data sent to user`);
});


export default ApiRouting;