import express, { Application, json } from 'express'
import cors from 'cors';
import path from 'path';
import conectarDB from '../config/db.js';

import routerPaymend from '../routes/paymend.routes.js';
import routerAuth from '../routes/auth.routes.js';
import routerWebhook from '../routes/webhook.routes.js';

const corsOptions = {
    origin: 'http://localhost:8080', // O el origen de tu aplicación en desarrollo
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  };
  
class Server {

    private app: Application;
    private port: string;
    private path = {
        auth         : '/api/auth',
        paymend      : '/api/paymend',
        webhook      : '/api/webhook'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8080';

        // this.db();
        this.middlewares();
        this.routes();
    }

    // async db(){
    //     await conectarDB();
    // }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.resolve('src/public')))

    }
    routes() {
        this.app.use(this.path.auth,routerAuth)
        this.app.use(this.path.paymend,routerPaymend)
        this.app.use(this.path.webhook,routerWebhook)

    }
    listen() {
        this.app.listen(this.port, () => {

            console.log(`el servidor estaa corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server