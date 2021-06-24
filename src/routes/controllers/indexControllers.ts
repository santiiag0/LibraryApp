import { Request, Response } from 'express';


class IndexController {
    public index (req:Request, res:Response){
        res.json({Text: 'API Is /api/books'});
    }
}

export const indexController = new IndexController();