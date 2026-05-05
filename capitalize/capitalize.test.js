const capitalize = require('./capitalize');

test('takes a string and returns it with the first character capitalized', () => {
    expect(capitalize('sagi')).toBe('Sagi');
    expect(capitalize('sAGI')).toBe('SAGI');
});