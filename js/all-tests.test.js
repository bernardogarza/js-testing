/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { capitalize } from './capitalize';
import { reverseString } from './reverse-string';
import { calculator } from './calculator';
import { caesarCipher } from './caesar-cipher';
import { array } from './arrays';

test('First letter is uppercase', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('First letter is uppercase example 2', () => {
  expect(capitalize('hola mundo')).toBe('Hola mundo');
});

test('"Hello world" has to chango to "dlrow olleH"', () => {
  expect(reverseString('Hello world')).toBe('dlrow olleH');
});

test('"Hola mundo" has to chango to "odnum aloH"', () => {
  expect(reverseString('Hola mundo')).toBe('odnum aloH');
});

test('Add 2 + 5 has to be 7', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('Add 7 + 5 has to be 12', () => {
  expect(calculator.add(7, 5)).toBe(12);
});

test('Substract 5 - 2 has to be 3', () => {
  expect(calculator.substract(5, 2)).toBe(3);
});

test('Substract 7 - 2 has to be 5', () => {
  expect(calculator.substract(7, 2)).toBe(5);
});

test('Multiply 2 * 5 has to be 10', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('Multiply 3 * 7 has to be 21', () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});

test('Divide 20 / 5 has to be 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('Divide 21 / 7 has to be 3', () => {
  expect(calculator.divide(21, 7)).toBe(3);
});

test('"xyz" has to change to "yza"', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('"a bc" has to change to "c de"', () => {
  expect(caesarCipher('a bc', 2)).toBe('c de');
});

test('Should return the array average', () => {
  expect(array([1, 2, 3, 4]).avg).toBe(2.5);
});

test('Should return the array average example 2', () => {
  expect(array([2, 4, 6, 8]).avg).toBe(5);
});

test('Should return the array smallest number', () => {
  expect(array([1, 2, 3, 4]).min).toBe(1);
});

test('Should return the array smallest number example 2', () => {
  expect(array([2, 4, 6, 8]).min).toBe(2);
});

test('Should return the array largest number', () => {
  expect(array([1, 2, 3, 4]).max).toBe(4);
});

test('Should return the array largest number example 2', () => {
  expect(array([2, 4, 6, 8]).max).toBe(8);
});

test('Should return the array length', () => {
  expect(array([1, 2, 3, 4]).length).toBe(4);
});

test('Should return the array length example 2', () => {
  expect(array([1, 2, 3]).length).toBe(3);
});
