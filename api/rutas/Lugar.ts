import { Router } from 'express';
import { buscarLugar } from '../controladores/Lugar';


 export let ciudad_ruta = Router();
 ciudad_ruta.post("/lugar/buscar",buscarLugar) 