import { Router } from "express";
import { Request,Response } from "express";

const routerPaymend = Router();

routerPaymend.get('/',(req:Request, res:Response)=>{

        res.json({msg:'Hola'}) 
        
})

routerPaymend.get('/',(req:Request, res:Response)=>{

    res.json({msg:'Hola3'}) 
    
})

routerPaymend.get('/',(req:Request, res:Response)=>{

    res.json({msg:'Hola2'}) 
    
})


export default routerPaymend