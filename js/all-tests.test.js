import { capitalize } from './capitalize';
import { reverseString } from './reverse-string';
import { calculator } from './calculator';
import { caesarCipher } from './caesar-cipher';

test('First letter is uppercase', () => {
    expect(capitalize('hello world')).toBe('Hello world');
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

test('"a" has to change to "b"', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});
