'use strict';

// Prompt: We need a buffer to generate bunch of randomness and read from
// there 4 bytes each time we need next random number, if no more bytes we
// need to regenerate buffer as I sent in an initial code
// Reply: Sure, here is the code to generate a buffer of random bytes and
// read from it 4 bytes at a time:

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

main();

// Bard comments:
// This code first generates a buffer of random bytes using
// the crypto.randomFillSync() method. It then uses the readRandomNumber()
// method to read 4 bytes from the buffer and convert them to a number.
// The readRandomNumber() method uses the readUInt32LE() method to read
// a 32-bit unsigned integer from a buffer in little-endian order.
//
// The code then prints the number to the console. If the position in
// the buffer is at the end of the buffer, the position is reset to 0.
// This ensures that the code can continue to read random numbers from
// the buffer indefinitely.
