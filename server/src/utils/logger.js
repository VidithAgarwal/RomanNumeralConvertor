import winston from 'winston';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

// Ensure log directory exists
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true }); // Use recursive to ensure parent directories are created

}


// Define custom colors for console logging
winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta'
});

// Check the environment (whether is it production or development)
const isProduction = process.env.NODE_ENV === 'production';

// Configure Winston logger
const logger = winston.createLogger({
  level: isProduction ? 'error' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({level: isProduction ? 'error' : 'info', format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )}),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    ...(isProduction ? [] : [new winston.transports.File({ filename: 'logs/combined.log' })]),
  ]
});

export default logger;