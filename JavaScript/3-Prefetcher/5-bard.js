'use strict';

// Prompt: Please do not change contract: cryptoRandom(): number and export it
// Reply: Sure, I can do that. Here is the code with the cryptoRandom()
// function unchanged:

const crypto = require('crypto');

const generateRandomBuffer = (size) => {
  const buf = new Uint8Array(size);
  crypto.randomFillSync(buf);
  return buf;
};

const readRandomNumber = (buf, offset) => {
  const bytes = buf.slice(offset, offset + 4);
  const number = bytes.readUInt32LE(0, true);
  return number;
};

const main = () => {
  const buf = generateRandomBuffer(4096);
  let pos = 0;

  while (true) {
    const number = readRandomNumber(buf, pos);
    pos += 4;

    console.log(number);

    if (pos === buf.length) {
      pos = 0;
    }
  }
};

const cryptoRandom = () => {
  const buf = generateRandomBuffer(4);
  return buf.readUInt32LE(0, true) / (0xffffffff + 1);
};

module.exports = {
  cryptoRandom,
};

// Bard comments:
// I have exported the cryptoRandom() function as a module.
// This means that other modules can import the function and use
// it to generate random numbers.

// Usage example

const n = cryptoRandom();
console.log({ n });
