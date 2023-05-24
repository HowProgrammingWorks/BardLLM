'use strict';

// Prompt:
// Optimize following code for complexity, readability, memory, and speed

// Bard reply:
// Sure, here are some optimizations that can be made to the code you provided:

// Complexity: The code can be simplified by using a single function to create
// the ID buffer and get the stream ID. This can be done by using the Int32Array
// constructor to create the ID buffer, and then using the getInt32 method to
// get the stream ID.
//
// Readability: The code can be made more readable by using descriptive variable
// names. For example, the idView and chunkView variables could be renamed to
// idBuffer and chunkBuffer.
//
// Memory: The code can be made more memory efficient by using the slice method
// to create a copy of the payload array. This will avoid creating a new array
// every time the decode method is called.
//
// Speed: The code can be made faster by using the bitwiseNot operator to invert
// the bits of the id value. This will allow the getStreamId method to get the
// stream ID in a single operation.
//
// Here is the optimized code:

const ID_LENGTH = 4;

const createIdBuffer = (id) => {
  const buffer = new Int32Array(ID_LENGTH);
  buffer[0] = id;
  return buffer;
};

const getStreamId = (buffer) => {
  return ~buffer[0];
};

class Chunk {
  static encode(id, payload) {
    const idBuffer = createIdBuffer(id);
    const chunkBuffer = new Uint8Array(ID_LENGTH + payload.length);
    chunkBuffer.set(idBuffer);
    chunkBuffer.set(payload, ID_LENGTH);
    return chunkBuffer;
  }

  static decode(chunkBuffer) {
    const id = getStreamId(chunkBuffer.buffer);
    const payload = chunkBuffer.slice(ID_LENGTH);
    return { id, payload };
  }
}

// These optimizations should make the code easier to read, understand, and
// maintain. They should also make the code faster and more memory efficient.

// Usage example

const encoder = new TextEncoder();
const data = encoder.encode('Hello World');
const packet = Chunk.encode(123, data);
console.log(packet);

const { id, payload } = Chunk.decode(packet);
const decoder = new TextDecoder();
const text = decoder.decode(payload);
console.log({ id, payload: text });

const assert = require('node:assert/strict');
assert.equal(id, 123);
assert.equal(text, 'Hello World');

module.exports = { Chunk };
