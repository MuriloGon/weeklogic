const hex = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
]

const to_binary = (decimal, system = 2) => {
  if (decimal === 1) return '1'

  let result = ''
  let num = decimal

  while (true) {
    const resto = num % system
    if (num === 0) break;
    num = Math.floor(num / system)
    result = `${hex[resto]}` + result
  }
  return result
}

// console.log(to_binary(7532145, 36))

// TESTS
const assert = require('assert')
assert.deepEqual(to_binary(1), '1');
assert.deepEqual(to_binary(5), '101');
assert.deepEqual(to_binary(11), '1011');
assert.deepEqual(to_binary(7532145), '11100101110111001110001');