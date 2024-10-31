const soma = require('./math');

test('A soma de dois números positivos', () => {
    expect(soma(5, 3)).toBe(8);
  });
  
  test('A soma de dois números negativos', () => {
    expect(soma(-5, -3)).toBe(-8);
  });
  
  test('A soma de um número positivo com zero', () => {
    expect(soma(5, 0)).toBe(5);
  });