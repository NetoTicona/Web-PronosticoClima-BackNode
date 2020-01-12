
import { Router } from 'express';
import { pronosticar } from '../controladores/Pronostico';


 export let prono_ruta = Router();
 prono_ruta.get("/pronostico/:lat/:lon",pronosticar) ;