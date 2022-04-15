const flip = (d, a) => {
  switch (d) {
    case 'R':
      return a.sort((a, b) => a - b);
    case 'L':
      return a.sort((a, b) => b - a);
  }
}

// TESTS
const assert = require('assert')
assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);