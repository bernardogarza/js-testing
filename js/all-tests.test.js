import { capitalize } from './capitalize';

test('First letter is uppercase', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});