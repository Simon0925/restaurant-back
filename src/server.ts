import express from 'express';
import dotenv from 'dotenv';
import commonMiddleware from './middleware/commonMiddleware'; 

const app = express();

commonMiddleware(app);

dotenv.config();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
