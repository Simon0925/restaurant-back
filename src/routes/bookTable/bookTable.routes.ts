import { Router, Request, Response } from 'express';
import BookTableController from '../../controller/bookTable.controller';

const router = Router();

const bookTableController = new BookTableController();

router.post('/', (req: Request, res: Response) => {
    bookTableController.bookTable(req, res); 
});

export default router;
