import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { ciudad_ruta } from '../rutas/Lugar';



var bodyParser = require('body-parser');

export class Server{
    public app: express.Application;
    public puerto:any;
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.habilitarCORS();
        this.configurarRutas();
    }

    habilitarCORS() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // configurar CORS
            res.header("Access-Control-Allow-Origin","http://localhost:4200");
            res.header("Access-Control-Allow-Headers","Content-type, Authorization");
            res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
            next();
        })
    }

    configurarBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }

    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor inciado correctamente en el puerto ${this.puerto}`);
            console.log(`visite: http://localhost:${this.puerto}`);
        });
    }

    configurarRutas(){
        this.app.use( ciudad_ruta )
    }
}

