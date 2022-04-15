const assert = require('assert')

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLocaleLowerCase().split('');

function createQuadrictGrid(order) {
  return Array(order).fill(null).map(() => Array(order).fill(null));
}

function fillLine(previousLine, currentLine, alphabet = ALPHABET) {
  const [firstLetter] = alphabet;
  if (previousLine === undefined) {
    for (let index = 0; index < currentLine.length; index += 1) {
      if (index === 0) currentLine[index] = firstLetter;
      else {
        currentLine[index] = alphabet[(index) % alphabet.length]
      }
    }
  } else {
    for (let index = 0; index < currentLine.length; index++) {
      const previousLetter = previousLine[index]
      const nextLetter = alphabet[alphabet.indexOf(previousLetter) + 1]
      currentLine[index] = nextLetter === undefined
        ? alphabet[Math.floor(((index) / alphabet.length))]
        : nextLetter
    }
  }
  return currentLine
}

function createMatrix(order, alphabeth = ALPHABET) {
  const grid = createQuadrictGrid(order);
  for (let x = 0; x < order; x++) {
    fillLine(grid[x - 1], grid[x], alphabeth);
  }
  return grid;
}

// RUNING CODE !!!!!
createMatrix(4, 'C -C#-D -D#-E -F -F#-G -G#-A -A#-B '.split('-')).forEach(x => console.log('\n'+x.join('   ')))

/* Skechts */
// |a00 a01 a02|    |a b c|
// |a10 a11 a12| -> |b c d|
// |a20 a21 a22|    |c d e|

// |a b c a b c a|
// |b c a b c a b|
// |c a b c a b c|
// |a b c a b c a|
// |b c a b c a b|
// |c a b c a b c|
// |a b c a b c a|
// |b c a b c a b|

/* Tests */
assert.deepStrictEqual('abc'.split(''), ['a', 'b', 'c']);

assert.equal(createQuadrictGrid(2).length, 2);
assert.equal(createQuadrictGrid(4).reduce((acc, _cv, _index, arr) => acc + arr.length, 0), 16);
assert.equal(createQuadrictGrid(8).reduce((acc, _cv, _index, arr) => acc + arr.length, 0), 64);

assert.deepStrictEqual(
  fillLine(undefined, [null, null, null], ['a', 'b', 'c', 'd']),
  ['a', 'b', 'c']
)
assert.deepStrictEqual(
  fillLine(undefined, [null, null, null, null], ['a', 'b', 'c', 'd']),
  ['a', 'b', 'c', 'd']
)
assert.deepStrictEqual(
  fillLine(undefined, [null, null, null, null, null], ['a', 'b']),
  ['a', 'b', 'a', 'b', 'a']
)

assert.deepStrictEqual(
  fillLine(['a', 'b', 'c', 'd', 'a'], [null, null, null, null, null], ['a', 'b', 'c', 'd']),
  ['b', 'c', 'd', 'a', 'b']
)

assert.deepStrictEqual(
  createMatrix(2),
  [
    ['a', 'b'],
    ['b', 'c'],
  ]
)

assert.deepStrictEqual(
  createMatrix(6),
  [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['b', 'c', 'd', 'e', 'f', 'g'],
    ['c', 'd', 'e', 'f', 'g', 'h'],
    ['d', 'e', 'f', 'g', 'h', 'i'],
    ['e', 'f', 'g', 'h', 'i', 'j'],
    ['f', 'g', 'h', 'i', 'j', 'k'],
  ]
)