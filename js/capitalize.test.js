import { capitalize } from './capitalize';

test('First letter is uppercase', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('First letter is uppercase example 2', () => {
    expect(capitalize('hola mundo')).toBe('Hola mundo');
});