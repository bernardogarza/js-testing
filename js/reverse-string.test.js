import { reverseString } from './reverse-string';

test('"Hello world" has to chango to "dlrow olleH"', () => {
    expect(reverseString('Hello world')).toBe('dlrow olleH');
});

test('"Hola mundo" has to chango to "odnum aloH"', () => {
    expect(reverseString('Hola mundo')).toBe('odnum aloH');
});