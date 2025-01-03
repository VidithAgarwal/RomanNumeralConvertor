import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta'
});

const isProduction = process.env.NODE_ENV === 'production';

const logger = winston.createLogger({
  level: isProduction ? 'error' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({level: isProduction ? 'error' : 'info'}),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    ...( isProduction ? [] : [new winston.transports.File({ filename: 'logs/combined.log' })])
  ]
});

export default logger;