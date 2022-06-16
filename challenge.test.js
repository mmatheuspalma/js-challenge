const nonConstructibleCoinsMachine = require('./challenge')

test('test input [1, 1, 1, 1, 1] be equal 6', () => {
  return expect(nonConstructibleCoinsMachine([1, 1, 1, 1, 1])).toEqual(6);
});

test('test input [1, 1, 2, 3, 5, 7, 22] be equal 20', () => {
  return expect(nonConstructibleCoinsMachine([1, 1, 2, 3, 5, 7, 22])).toEqual(20);
});

test('test input [1, 5, 1, 1, 1, 10, 15, 20, 100] be equal 55', () => {
  return expect(nonConstructibleCoinsMachine([1, 5, 1, 1, 1, 10, 15, 20, 100])).toEqual(55);
});