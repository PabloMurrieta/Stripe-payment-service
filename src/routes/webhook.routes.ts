import { Router } from "express";

import { createWebHook } from "../controllers/webHookController";

const routerWebhook = Router();

routerWebhook.get('/',createWebHook)

export default routerWebhook;

