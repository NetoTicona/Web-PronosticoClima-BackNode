import { Request,Response } from 'express';

var unirest = require("unirest");

export let pronosticar = ( req:Request,res:Response )=>{

    let lat = req.params.lat;
    let lon = req.params.lon;
 
    
    let api='849852ab19dc468f623639e49295815e'


    var clima = unirest("GET",`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`)
    console.log(clima);
    

    clima.headers({
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "ee6fb8cea1mshe4f5952ce76b621p14a0f5jsn6f73ae1c2234"
    });

    clima.end((respuesta: any) => {
        if (respuesta.error) {
            res.send("ERROR");
        } else {
            res.status(200).send(respuesta)
        }
    });



}