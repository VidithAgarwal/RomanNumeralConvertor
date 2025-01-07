import express from 'express';
import  cors from 'cors';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware.js';
import notFound from './middleware/notFound.js';
import romanConvertorRoute from './routes/romanConvertorRoute.js';
import { metricsMiddleware, metricsRoute } from './middleware/metrics.js';

const app = express();

// Enable CORS with environment-specific configuration
app.use(cors());

// JSON parsing
app.use(express.json());

// Headers caching
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
  });

// Metrics middleware and route
app.use(metricsMiddleware);
app.get('/metrics', metricsRoute);

// Roman numeral conversion route
app.use('/romannumeral', romanConvertorRoute);

app.use(notFound);

// Error handling middleware
app.use(errorMiddleware);

export default app; 