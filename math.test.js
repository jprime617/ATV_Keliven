const soma = require('./math');

test('soma 2 + 2 = 4', () => {
    expect(soma(2,2)).toBe(4)
});
test('soma -2 + -2 = -4', () => {
    expect(soma(-2,-2)).toBe(-4)
});
test('soma 2 + 0 = 2', () => {
    expect(soma(2,0)).toBe(2)
});
