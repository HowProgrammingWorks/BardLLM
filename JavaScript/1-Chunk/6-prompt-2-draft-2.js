'use strict';

// Prompt:
// Optimize following code

const ID_LENGTH = 4;

const createIdBuffer = (id) => {
  const view = new DataView(new ArrayBuffer(ID_LENGTH));
  view.setInt32(0, id);
  return view;
};

const encode = (id, payload) => {
  const view = createIdBuffer(id);
  const chunkView = new Uint8Array(ID_LENGTH + payload.length);
  chunkView.set(view);
  chunkView.set(payload, ID_LENGTH);
  return chunkView;
};

const decode = (chunkView) => {
  const view = new DataView(chunkView.buffer);
  const id = view.getInt32(0);
  const payload = chunkView.subarray(ID_LENGTH);
  return { id, payload };
};

// Usage example

const encoder = new TextEncoder();
const data = encoder.encode('Hello World');
const packet = encode(123, data);
console.log(packet);

const { id, payload } = decode(packet);
const decoder = new TextDecoder();
const text = decoder.decode(payload);
console.log({ id, payload: text });

module.exports = { encode, decode };
