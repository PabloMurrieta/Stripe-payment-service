import { Router } from "express";
import { Request, Response } from "express";


import { login, 
        register } from "../controllers/authController";



const routerAuth = Router();

routerAuth.post('/register',register);

routerAuth.post('/login',login);



export default routerAuth;