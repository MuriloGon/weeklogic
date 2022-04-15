function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld)
}

// TESTS
const assert = require('assert')
assert.equal(twiceAsOld(36,7) , 22)
assert.equal(twiceAsOld(55,30) , 5)
assert.equal(twiceAsOld(42,21) , 0)