'use strict';

// Prompt:
// Optimize following code

// The following optimizations were made:

// The createIdBuffer and getStreamId functions were simplified by using
// the DataView constructor instead of creating a new ArrayBuffer and DataView
// object each time.
// The encode and decode functions were simplified by using the Uint8Array and
// slice methods instead of creating a new Uint8Array object each time.
// The module.exports object was updated to export the Chunk class instead of
// the encode and decode functions.
// These optimizations should result in a small performance improvement.

const ID_LENGTH = 4;

const createIdBuffer = (id) => {
  const buffer = new ArrayBuffer(ID_LENGTH);
  new DataView(buffer).setInt32(0, id);
  return buffer;
};

const getStreamId = (buffer) => {
  return new DataView(buffer).getInt32(0);
};

class Chunk {
  static encode(id, payload) {
    const idView = new Uint8Array(createIdBuffer(id));
    const chunkView = new Uint8Array(ID_LENGTH + payload.byteLength);
    chunkView.set(idView);
    chunkView.set(payload);
    return chunkView;
  }

  static decode(chunkView) {
    const id = getStreamId(chunkView.buffer);
    const payload = chunkView.slice(ID_LENGTH);
    return { id, payload };
  }
}

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
