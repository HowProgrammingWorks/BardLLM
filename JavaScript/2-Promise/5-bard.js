'use strict';

// Prompt: Code is broken: SyntaxError: missing ) after argument list
// Reply: You are correct, the code is broken. The error is caused by
// a missing closing parenthesis after the || '{ port: 80 }' part.
// The correct code should be:

const fs = require('node:fs').promises;

const config = JSON.parse(
  await fs.readFile('config.json', 'utf8') || '{ port: 80 }'
);

console.log({ config });

// Bard comments:
// I apologize for the error. I am still under development and learning
// to generate code that is correct and error-free.
