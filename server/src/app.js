import express from 'express';
import  cors from 'cors';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware.js';
import romanConvertorRoute from './routes/romanConvertorRoute.js';
import { metricsMiddleware, metricsRoute } from './middleware/metrics.js';


const app = express();

app.use(metricsMiddleware);


app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
  });


app.use('/romannumeral', romanConvertorRoute);
app.get('/metrics', metricsRoute);

app.use(errorMiddleware);

export default app; 