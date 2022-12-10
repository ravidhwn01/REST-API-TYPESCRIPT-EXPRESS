import express, { Router } from 'express'
const apiRouter:Router = express.Router();


//logic 
apiRouter.get('/users', (req :express.Request , res:express.Response ) => {
    res.send('users api router path');
});

apiRouter.get('/posts', (req :express.Request , res:express.Response) => {
    res.send('posts api router path');
});
apiRouter.get('/', (req :express.Request , res:express.Response) => {
    res.send('api router path');
});

export default apiRouter;


