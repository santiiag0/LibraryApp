import { Router} from 'express';
import booksControllers   from './controllers/booksControllers'

class BooksRoutes{

   public router: Router = Router();

   constructor(){
        this.config();
   }

   config():void{
       this.router.get('/',booksControllers.list);
       this.router.get('/:id',booksControllers.listOne);
       this.router.post('/',booksControllers.create);
       this.router.put('/:id',booksControllers.update);
       this.router.delete('/:id',booksControllers.delete)
   }
}

const booksRoutes = new BooksRoutes();
export default booksRoutes.router;