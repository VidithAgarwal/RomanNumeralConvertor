import { convertIntegerToRoman } from '../src/services/romanConvertorService.js';

describe('Roman Numeral Conversion Tests', () => {
  // Valid conversions
  test('Convert 1 to I', () => {
    expect(convertIntegerToRoman(1)).toBe('I');
  });
  test('Convert 3999 to MMMCMXCIX', () => {
    expect(convertIntegerToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('Convert 4 to IV', () => {
    expect(convertIntegerToRoman(4)).toBe('IV');
  });

  test('Convert 9 to IX', () => {
    expect(convertIntegerToRoman(9)).toBe('IX');
  });

  test('Convert 40 to XL', () => {
    expect(convertIntegerToRoman(40)).toBe('XL');
  });

  test('Convert 90 to XC', () => {
    expect(convertIntegerToRoman(90)).toBe('XC');
  });

  test('Convert 400 to CD', () => {
    expect(convertIntegerToRoman(400)).toBe('CD');
  });

  test('Convert 900 to CM', () => {
    expect(convertIntegerToRoman(900)).toBe('CM');
  });

  test('Convert 58 to LVIII', () => {
    expect(convertIntegerToRoman(58)).toBe('LVIII');
  });

  test('Convert 1987 to MCMLXXXVII', () => {
    expect(convertIntegerToRoman(1987)).toBe('MCMLXXXVII');
  });

  test('Convert 2023 to MMXXIII', () => {
    expect(convertIntegerToRoman(2023)).toBe('MMXXIII');
  });

  // Boundary tests
  test('Convert lower boundary (1)', () => {
    expect(convertIntegerToRoman(1)).toBe('I');
  });

  test('Convert upper boundary (3999)', () => {
    expect(convertIntegerToRoman(3999)).toBe('MMMCMXCIX');
  });

  // Invalid inputs
  test('Throw error for invalid input (4000)', () => {
    expect(() => convertIntegerToRoman(4000)).toThrow('Input must be between 1 and 3999');
  });

  test('Throw error for string input (abc)', () => {
    const query = 'abc';
    expect(() => convertIntegerToRoman(parseInt(query))).toThrow('Invalid input: Please provide a numeric value.');
  });

  test('Throw error for negative numbers (-1)', () => {
    expect(() => convertIntegerToRoman(-1)).toThrow('Input must be between 1 and 3999');
  });

  test('Throw error for zero (0)', () => {
    expect(() => convertIntegerToRoman(0)).toThrow('Input must be between 1 and 3999');
  });

  test('Throw error for non-integer numbers (2.5)', () => {
    expect(() => convertIntegerToRoman(2.5)).toThrow('Invalid input: Please provide a numeric value.');
  });

  test('Throw error for null input', () => {
    expect(() => convertIntegerToRoman(null)).toThrow('Invalid input: Please provide a numeric value.');
  });

  test('Throw error for undefined input', () => {
    expect(() => convertIntegerToRoman(undefined)).toThrow('Invalid input: Please provide a numeric value.');
  });

  test('Throw error for object input', () => {
    expect(() => convertIntegerToRoman({})).toThrow('Invalid input: Please provide a numeric value.');
  });

  test('Throw error for extremely large number', () => {
    expect(() => convertIntegerToRoman(10000)).toThrow('Input must be between 1 and 3999');
  });

  test('Throw error for extremely small number', () => {
    expect(() => convertIntegerToRoman(-10000)).toThrow('Input must be between 1 and 3999');
  });

  // Performance test
  test('Performance test for range 1 to 3999', () => {
    for (let i = 1; i <= 3999; i++) {
      expect(convertIntegerToRoman(i)).toBeDefined();
    }
  });
});
