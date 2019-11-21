import { array } from './arrays';

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