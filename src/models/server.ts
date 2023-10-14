import express, { Application } from 'express'



class Server {

    private app: Application;
    private port: string;
    private path = {
        paymend: 'api/paymend'
    }


    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8080';


        this.middlewares();
        this.routes();
    }

    db(){}
    middlewares(){}
    routes() {}
    listen() {
        this.app.listen(this.port, () => {

            console.log(`el servidor estaa corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server