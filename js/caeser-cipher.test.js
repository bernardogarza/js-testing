import { caesarCipher } from './caesar-cipher';

test('"xyz" has to change to "yza"', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('"a bc" has to change to "c de"', () => {
    expect(caesarCipher('a bc', 2)).toBe('c de');
});
