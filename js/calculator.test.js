import { calculator } from './calculator';

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
