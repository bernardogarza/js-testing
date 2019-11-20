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

test('Add 2 + 5 has to be 7', () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test('Add 5 - 2 has to be 3', () => {
    expect(calculator.substract(5, 2)).toBe(3);
});

test('Add 2 * 5 has to be 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});

test('Add 20 / 5 has to be 4', () => {
    expect(calculator.divide(20, 5)).toBe(4);
});

test('"xyz" has to change to "yza"', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('Should return the array average', () => {
    expect(array([1, 2, 3, 4]).avg).toBe(2.5);
});

test('Should return the array smallest number', () => {
    expect(array([1, 2, 3, 4]).min).toBe(1);
});

test('Should return the array largest number', () => {
    expect(array([1, 2, 3, 4]).max).toBe(4);
});

test('Should return the array length', () => {
    expect(array([1, 2, 3, 4]).length).toBe(4);
});
