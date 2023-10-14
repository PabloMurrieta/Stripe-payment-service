import { Router } from "express";
import { Request,Response } from "express";
import { cancelOrder, captureOrder, createOrder } from "../middlewares/paymendController";



const routerPaymend = Router();

routerPaymend.get('/create',createOrder)

routerPaymend.get('/capture',captureOrder)

routerPaymend.get('/cancel',cancelOrder)






export default routerPaymend