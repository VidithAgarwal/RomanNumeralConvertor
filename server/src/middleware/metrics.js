import { register, collectDefaultMetrics, Counter, Gauge, Histogram } from 'prom-client';
import logger from '../utils/logger.js';

// Collect default metrics (e.g., CPU, memory usage) and register them with Prometheus
collectDefaultMetrics({ register });

// Metric: Total number of HTTP requests
const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

// Metric: Successful Roman numeral conversions
const successfulConversions = new Counter({
  name: 'successful_conversions_total',
  help: 'Total number of successful Roman numeral conversions',
});

/**
 * Increments the counter for successful Roman numeral conversions.
 * This function should be called whenever a Roman numeral conversion
 * is completed successfully to update the corresponding metric.
 */

export function trackSuccessfulConversion() {
  successfulConversions.inc();
}

// Metric: Failed Roman numeral conversions
const failedConversions = new Counter({
  name: 'failed_conversions_total',
  help: 'Total number of failed Roman numeral conversions',
});

/**
 * Increments the counter for failed Roman numeral conversions.
 * This function should be called whenever a Roman numeral conversion
 * fails to update the corresponding metric.
 */
export function trackFailedConversion() {
  failedConversions.inc();
}


// Metric: Active HTTP requests
const activeRequests = new Gauge({
  name: 'active_requests',
  help: 'Number of active HTTP requests',
});

// Metric: Latency of HTTP requests
const requestLatency = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'] // Labels for request method, route, and status
});

// Register all custom metrics with Prometheus
register.registerMetric(httpRequestCounter);
register.registerMetric(successfulConversions);
register.registerMetric(failedConversions);
register.registerMetric(activeRequests);
register.registerMetric(requestLatency);

/**
 * Middleware to capture metrics for each HTTP request
 *
 * @param {Object} req - The Express request object
 * @param {Object} res - The Express response object
 * @param {Function} next - The next middleware function in the stack
 */
export async function metricsMiddleware(req, res, next) {
  activeRequests.inc();

  // Start a timer to measure the request latency
  const end = requestLatency.startTimer();

  // Capture metrics once the response is sent
  res.on('finish', async () => {
    activeRequests.dec();

    const labels = {
      method: req.method,
      route: req.baseUrl + (req.route?.path || ''),
      status: res.statusCode.toString(),
    };

    try {
      // Increment the counter for the request
      httpRequestCounter.labels(labels.method, labels.route, labels.status).inc();

      // Update the request latency histogram
      end(labels);

    } catch (err) {
      logger.error(`Failed to update metrics: ${err.message}`);
    }
  });

  next();
}


/**
 * Route to serve metrics in JSON format
 * @param {http.IncomingMessage} req - The request object
 * @param {http.ServerResponse} res - The response object
 */
export async function metricsRoute(req, res) {
  try {
    // Fetch metrics
    const metrics = await register.metrics(); 
    res.set('Content-Type', register.contentType);
    res.send(metrics); // Send metrics in Prometheus format
  } catch (err) {
    logger.error('Error serving metrics', { error: err.message });
    res.status(500).send('Failed to fetch metrics');
  }
}
