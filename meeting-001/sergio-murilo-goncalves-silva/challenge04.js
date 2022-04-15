function expressionsMatter(a, b, c) {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
}

// TESTS
const assert = require('assert')
assert.equal(expressionsMatter(1, 1, 1), 3)
assert.equal(expressionsMatter(1, 2, 3), 9)
assert.equal(expressionsMatter(9, 1, 1), 18)