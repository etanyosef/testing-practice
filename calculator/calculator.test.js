import calculator from "./calculator";

// add
test('add', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('add with 0', () => {
    expect(calculator.add(0, 2)).toBe(2);
});
test('add with negative number', () => {
    expect(calculator.add(-2, 2)).toBe(0);
});

// subtract
test('subtract', () => {
    expect(calculator.subract(2, 1)).toBe(1);
});
test('subtract with negative result', () => {
    expect(calculator.subract(2, 3)).toBe(-1);
});
test('subtract with negative', () => {
    expect(calculator.subract(-2, 3)).toBe(-5);
});
test('subtract with zero', () => {
    expect(calculator.subract(0, 3)).toBe(-3);
    expect(calculator.subract(3, 0)).toBe(3);
});

// divide
test('divide', () => {
    expect(calculator.divide(3, 1)).toBe(3);
    expect(calculator.divide(3, 3)).toBe(1);
});
test('divide with decimals', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(3, 1.5)).toBe(2);
});
test('divide with decimal result', () => {
    expect(calculator.divide(5, 3)).toBeCloseTo(1.67); //round
});

//multiply
test('multiply', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});