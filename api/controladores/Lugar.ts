// Lugar de la peticiones
import { Request, Response } from 'express';

var unirest = require("unirest");


export let buscarLugar = (req: Request, res: Response)=>{
    let busqueda = req.body.busqueda;
    
    let busquedaURI = encodeURI(busqueda);

    var RapidApi = unirest("GET",
    `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busquedaURI}`);

RapidApi.headers({
    "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
	"x-rapidapi-key": "ee6fb8cea1mshe4f5952ce76b621p14a0f5jsn6f73ae1c2234"
});

RapidApi.end((respuesta: any) => {
    if (respuesta.error) {
        res.send("ERROR");
    } else {
        res.status(200).send(respuesta.body)
    }
});
    
}