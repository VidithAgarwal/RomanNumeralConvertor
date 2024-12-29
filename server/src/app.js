import express from 'express';
import  cors from 'cors';
import romanController from './controllers/roman.controller.js';
import errorHandler from './middlewares/errorHandler.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/', (req, res) => {

};

export default app; 