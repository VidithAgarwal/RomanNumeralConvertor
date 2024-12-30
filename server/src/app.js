import express from 'express';
import  cors from 'cors';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware.js';
import romanConvertorRoute from './routes/romanConvertorRoute.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/romannumeral', romanConvertorRoute);

app.use(errorMiddleware);

export default app; 