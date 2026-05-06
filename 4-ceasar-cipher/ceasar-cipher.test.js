import ceasarCipher from "./ceasar-cipher";

test('Ceasar Cipher', () => {
    expect(ceasarCipher('xyz', 3)).toBe('abc');
});
test('case preservation', () => {
    expect(ceasarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('with punctuation', () => {
    expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});