function minSum(arr = []) {
  const sorted = arr.sort((a, b) => a - b)
  const a = sorted.slice(0, sorted.length / 2)
  const b = sorted.slice(sorted.length / 2, sorted.length).reverse()
  let output = 0;
  for (let i = 0; i < sorted.length / 2; i += 1) {
    output += a[i] * b[i]
  }
  return output
}

// TESTS
const assert = require('assert')

assert.equal(minSum([5, 4, 2, 3]), 22)
assert.equal(minSum([12, 6, 10, 26, 3, 24]), 342)
assert.equal(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74)