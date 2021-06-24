import { Request, Response } from 'express';
import pool from '../../database';

class BooksController {

    
    public async list (req: Request, res: Response) {
        pool.query('SELECT * FROM books', (err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
    }

    public async listOne (req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        pool.query('SELECT * FROM books WHERE id=?',[id],(err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                res.status(404).json({Text: "the book doest'n exists"});
            }
        });
    }

    public async create (req:Request, res:Response):Promise<void>{
        pool.query('INSERT INTO books set ?',[req.body]);
        res.json({message: 'registered book'});
    }

    public async update (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        pool.query('UPDATE books set ? WHERE id=?',[req.body, id]);
        res.json({message: 'the book'+' '+ id +' '+'was Update'});
    }

    public async delete (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        pool.query('DELETE FROM books WHERE id=?',[id], (err, rows, fields)=>{
            if (!err) {
                res.json({ status: 'the book was Delete'});
            } else {
                console.log(err);
            } 
        })
    }

}

const bookController = new BooksController();
export default bookController;