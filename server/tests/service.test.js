import { intToRoman } from '../src/services/romanConvertorService.js';

test('Convert 1 to I', () => {
  expect(intToRoman(1)).toBe('I');
});

test('Convert 3999 to MMMCMXCIX', () => {
  expect(intToRoman(3999)).toBe('MMMCMXCIX');
});

test('Throw error for invalid input (4000)', () => {
  expect(() => intToRoman(4000)).toThrow('Input must be between 1 and 3999');
});

test('Throw error for string input (abc)', () => {
  const query = 'abc';
  expect(() => intToRoman(parseInt(query))).toThrow('Invalid input: Please provide a numeric value.');
});

test('Throw error for negative numbers (-1)', () => {
  expect(() => intToRoman(-1)).toThrow('Input must be between 1 and 3999');
});

test('Throw error for zero (0)', () => {
  expect(() => intToRoman(0)).toThrow('Input must be between 1 and 3999');
});

test('Throw error for non-integer numbers (2.5)', () => {
  expect(() => intToRoman(2.5)).toThrow('Invalid input: Please provide a numeric value.');
});

test('Convert 4 to IV', () => {
  expect(intToRoman(4)).toBe('IV');
});

test('Convert 9 to IX', () => {
  expect(intToRoman(9)).toBe('IX');
});

test('Convert 40 to XL', () => {
  expect(intToRoman(40)).toBe('XL');
});

test('Convert 90 to XC', () => {
  expect(intToRoman(90)).toBe('XC');
});

test('Convert 400 to CD', () => {
  expect(intToRoman(400)).toBe('CD');
});

test('Convert 900 to CM', () => {
  expect(intToRoman(900)).toBe('CM');
});
