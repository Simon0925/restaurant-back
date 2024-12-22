import express from 'express';
import bookTableRouter from './bookTable/bookTable.routes'; 

const router = express.Router();


router.use('/reservation', bookTableRouter);

export default router;  