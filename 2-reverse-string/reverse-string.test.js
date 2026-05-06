const reverseString = require('./reverse-string');

test('takes a string and returns it reversed', () => {
    expect(reverseString('sagi')).toBe('igas');
});
test('with space', () => {
    expect(reverseString('sagi cat')).toBe('tac igas');
});
test('with uppercase letter', () => {
    expect(reverseString('Sagis')).toBe('sigaS');
});