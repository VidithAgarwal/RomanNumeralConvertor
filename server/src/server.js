import app from './app.js'
import logger from './utils/logger.js';

const port = process.env.PORT || 8080;

app.listen(port, '::', () => {
  logger.info(`Server running at http://localhost:${port}/`);
});