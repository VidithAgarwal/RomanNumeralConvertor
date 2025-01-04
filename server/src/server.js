import app from './app.js';
import logger from './utils/logger.js';

const port = process.env.PORT || 8080;

// Start the server and log any startup errors
app.listen(port, '::', () => {
  logger.info(`Server running at PORT:${port} in ${process.env.NODE_ENV || 'development'} mode`);
}).on('error', (err) => {
  logger.error(`Failed to start server: ${err.message}`);
  process.exit(1); // Exit with failure code
});