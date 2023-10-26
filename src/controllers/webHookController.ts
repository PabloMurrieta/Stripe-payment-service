import { Request, Response } from "express";


export const createWebHook = (req: Request, res: Response) => {
    console.log('conectado');
    res.json('conectado')
};