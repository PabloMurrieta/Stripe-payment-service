import express, { Application, json } from 'express'
import routerPaymend from '../routes/paymend.routes.js';
import path from 'path';
import conectarDB from '../config/db.js';



class Server {

    private app: Application;
    private port: string;
    private path = {
        paymend: '/api/paymend'
    }


    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8080';

        this.db();
        this.middlewares();
        this.routes();
    }

    async db(){
        await conectarDB();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static(path.resolve('src/public')))

    }
    routes() {
        this.app.use(this.path.paymend,routerPaymend)
    }
    listen() {
        this.app.listen(this.port, () => {

            console.log(`el servidor estaa corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server