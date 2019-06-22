import luhnAlgorithm from '../src/js/luhnAlgorithm';
import defineSistem from '../src/js/defineSistem';

// luhnAlgorithm
test.each([
  ['true for valid value American Express', '371449635398431', true],
  ['true for valid value Diners Club', '30569309025904', true],
  ['true for valid value Discover', '6011111111111117', true],
  ['true for valid value JCB', '3530111333300000', true],
  ['true for valid value MasterCard', '5555555555554444', true],
  ['true for valid value Visa', '4111111111111111', true],
  ['true for valid value MIR', '2200240942005725', true],
  ['false for invalid', '4', false],
])('it should be %s', (_, input, expected) => {
  expect(luhnAlgorithm(input)).toBe(expected);
});


// defineSistem
test.each([
  ['sistem American Express', '371449635398431', 'americanExpress'],
  ['sistem Diners Club', '30569309025904', 'dinersClub'],
  ['sistem Discover', '6011111111111117', 'discover'],
  ['sistem JCB', '3530111333300000', 'JCB'],
  ['sistem MasterCard', '5555555555554444', 'masterCard'],
  ['sistem Visa', '41111111', 'visa'],
  ['sistem MIR', '2200240942005725', 'mir'],
  ['no sistem num', '9889897', false],
  ['no sistem space', '', false],
])('it should be %s', (_, input, expected) => {
  expect(defineSistem(input)).toBe(expected);
});
