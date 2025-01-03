import { register, collectDefaultMetrics, Counter, Gauge, Histogram } from 'prom-client';
import logger from '../utils/logger.js';

// Collect default metrics and register them
collectDefaultMetrics({ register });

// Custom metric: HTTP request counter
const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

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

const failedConversions = new Counter({
  name: 'failed_conversions_total',
  help: 'Total number of failed Roman numeral conversions',
});

export function trackFailedConversion() {
  failedConversions.inc();
}

const activeRequests = new Gauge({
  name: 'active_requests',
  help: 'Number of active HTTP requests',
});

const requestLatency = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
});

// Register custom metric
register.registerMetric(httpRequestCounter);
register.registerMetric(successfulConversions);
register.registerMetric(failedConversions);
register.registerMetric(activeRequests);
register.registerMetric(requestLatency);

// Middleware to capture metrics for each HTTP request
export async function metricsMiddleware(req, res, next) {
  activeRequests.inc();
  const end = requestLatency.startTimer();
  res.on('finish', async () => {
    activeRequests.dec()
    const labels = {
      method: req.method,
      route: req.baseUrl + (req.route?.path || ''),
      status: res.statusCode.toString(),
    };

    try {
      // Increment the counter for the request
      httpRequestCounter.labels(labels.method, labels.route, labels.status).inc();
      end(labels);
      logger.info(`Metrics updated successfully: ${JSON.stringify(labels)}`);
    } catch (err) {
      logger.error(`Failed to update metrics: ${err.message}`);
    }
  });
  next();
}

// Route to serve metrics in JSON format
export async function metricsRoute(req, res) {
  try {
    // Fetch metrics in Prometheus' text exposition format
    const metrics = await register.metrics(); 
    res.set('Content-Type', register.contentType); // Set content-type to text/plain
    res.send(metrics); // Send metrics in Prometheus format
  } catch (err) {
    logger.error('Error serving metrics', { error: err.message });
    res.status(500).send('Failed to fetch metrics');
  }
}
