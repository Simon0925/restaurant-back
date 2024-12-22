import express from 'express';
import cors from 'cors';
import routes  from '../routes/routes'
import path from 'path';


const commonMiddleware = (app: express.Express) => {

    app.use(cors({
    origin: '*',
    }));

  app.use(express.json());  

  app.use(cors({
    origin: 'http://localhost:5175', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type'], 
}));

app.use('/api', routes);

app.use(express.static(path.join(__dirname, '../../public')));


};

export default commonMiddleware;
