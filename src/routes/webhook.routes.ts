import { Request, Response } from "express";

import { Router } from "express";

const routerWebhook = Router();

routerWebhook.get('/',(req: Request, res: Response) => {
    console.log('conectado');
    res.json('conectado')
});

export default routerWebhook;

