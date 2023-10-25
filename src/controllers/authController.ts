import { Request, Response } from "express";


export const register = async (req: Request, res: Response) =>{

    res.json({msg:'register'})
}

export const login = async (req: Request, res: Response) =>{

    res.json({msg:'login'})

}



