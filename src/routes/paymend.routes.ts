import { Router } from "express";
import { Request,Response } from "express";
import { cancelOrder, captureOrder, createOrder } from "../controllers/paymendController";



const routerPaymend = Router();

routerPaymend.post('/create',createOrder)

routerPaymend.get('/capture',captureOrder)

routerPaymend.get('/cancel',cancelOrder)


export default routerPaymend