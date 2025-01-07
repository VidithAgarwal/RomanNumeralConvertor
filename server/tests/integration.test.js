import request from 'supertest';
import app from '../src/app.js'; // Import your Express app
import { jest } from '@jest/globals';


import logger from '../src/utils/logger.js';


beforeAll(() => {
  jest.spyOn(logger, 'info').mockImplementation(() => {});
  jest.spyOn(logger, 'error').mockImplementation(() => {});
  jest.spyOn(logger, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  logger.info.mockRestore();
  logger.error.mockRestore();
  logger.warn.mockRestore();
});


describe('Integration Tests for Roman Numeral API', () => {
  // Test for valid input
  it('should convert 58 to LVIII', async () => {
    const response = await request(app).get('/romannumeral').query({ query: 58 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: '58',
      output: 'LVIII',
    });
  });

  // Test for valid input at boundary (1)
  it('should convert 1 to I', async () => {
    const response = await request(app).get('/romannumeral').query({ query: 1 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: '1',
      output: 'I',
    });
  });

  // Test for valid input at boundary (3999)
  it('should convert 3999 to MMMCMXCIX', async () => {
    const response = await request(app).get('/romannumeral').query({ query: 3999 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: '3999',
      output: 'MMMCMXCIX',
    });
  });

  // Test for negative input
  it('should return a 400 error for negative input (-10)', async () => {
    const response = await request(app).get('/romannumeral').query({ query: -10 });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Input -10 must be between 1 and 3999'
    );
  });

  // Test for decimal input
  it('should return a 400 error for decimal input (10.5)', async () => {
    const response = await request(app).get('/romannumeral').query({ query: 10.5 });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Invalid input 10.5 : Please provide a numeric value.'
    );
  });

  // Test for non-numeric string input
  it('should return a 400 error for non-numeric string input (abc)', async () => {
    const response = await request(app).get('/romannumeral').query({ query: 'abc' });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Invalid input abc : Please provide a numeric value.'
    );
  });

  // Test for empty query parameter
  it('should return a 400 error for empty query parameter', async () => {
    const response = await request(app).get('/romannumeral').query({ query: '' });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Input cannot be null, undefined, or empty.'
    );
  });

  // Test for missing query parameter
  it('should return a 400 error for missing query parameter', async () => {
    const response = await request(app).get('/romannumeral');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Input cannot be null, undefined, or empty.'
    );
  });

  // Test for valid input that includes leading zeros
  it('should convert input with leading zeros (007) to VII', async () => {
    const response = await request(app).get('/romannumeral').query({ query: '007' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: '007',
      output: 'VII',
    });
  });

  // Test for valid input with whitespace
  it('should handle input with leading/trailing whitespace ( "  58  ")', async () => {
    const response = await request(app)
      .get('/romannumeral')
      .query({ query: '  58  ' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      input: '58',
      output: 'LVIII',
    });
  });

  // Test for non-standard numerical input (e.g., scientific notation)
  it('should return a 400 error for input in scientific notation (3e2)', async () => {
    const response = await request(app).get('/romannumeral').query({ query: '3e2' });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      'error',
      'Invalid input 3e2 : Please provide a numeric value.'
    );
  });

  it('should return a 404 error for route that doesn\'t exist', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty(
      'error',
      "Route not found"
    );
  });
});
