import { error } from "console";
import  { Request, Response, NextFunction } from "express";

export function requireApiKey(req:Request, res: Response, next: NextFunction): void {
    const apiKey = req.headers["x-api-key"];

    if(!apiKey){
        res.status(401).json({
            error:"Missing API Key"
        });
        return
    }

    next()
}