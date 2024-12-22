import { Request, Response } from 'express';
import validateBookTableForm from '../services/validateBookTableForm';

class BookTableController {

    async bookTable(req: Request, res: Response): Promise<void> {
        
        const { name, phoneNumber, email, guests, date, time } = req.body;
      
        const validation = validateBookTableForm(req.body) as { [key: string]: string };
    
        if(validation) {
            res.status(400).json({ messages: validation });
        }else{
            res.status(200).json({ message: 'Table booked successfully' });
        }

    }

}

export default BookTableController;
