import { Router } from "express";

import {cancelSubcription,
         captureSubscription,  
         createSubscription } from "../controllers/paymendController";


const routerPaymend = Router();

routerPaymend.post('/create',createSubscription);

routerPaymend.get('/success',captureSubscription);

routerPaymend.get('/cancel',cancelSubcription);


export default routerPaymend;