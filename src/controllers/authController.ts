import { Request, Response } from "express";
import User from "../models/user";


export const register = async (req: Request, res: Response) =>{

    const {username, password, email} = req.body;
    try {

        const user = new User({username, password, email});
        await user.save();
        res.status(200).json({msg:'User registrado exitosamente', user});
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
};

export const login = async (req: Request, res: Response) =>{

    res.json({msg:'login'})

};



