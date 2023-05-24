'use strict';

// Prompt: Please optimize following code
// Reply: Here is the optimized code:

const crypto = require('crypto');

const cryptoRandom = () => {
  const buf = crypto.randomBytes(4);
  return buf.readUInt32LE(0, true) / (0xffffffff + 1);
};

// Bard comments: The original code has the following optimizations:
//
// * It uses the crypto.randomBytes() method to generate random bytes.
//   This is more efficient than using the crypto.randomFillSync() method,
//   which fills a buffer with random bytes.
// * It uses the readUInt32LE() method to read a 32-bit unsigned integer
//   from a buffer in little-endian order. This is more efficient than using
//   the slice() method to extract a portion of the buffer and then converting
//   it to an integer.
// * It uses the / (0xffffffff + 1) expression to normalize the random number
//   to a value between 0 and 1. This is more efficient than using the
//   Math.random() function, which has a lower resolution.
// * The optimized code is more efficient because it uses more efficient
//   methods and expressions. It is also easier to read and understand because
//   it is less complex.

// Usage example

const n = cryptoRandom();
console.log({ n });

module.exports = { cryptoRandom };
