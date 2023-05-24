'use strict';

// Prompt: Node output: ReferenceError: Cannot access 'config'
// before initialization
// Reply: You are correct, the code is broken. The error is caused by the config
// variable being used before it is initialized. The correct code should be:

const fs = require('node:fs').promises;

const config = await fs.readFile('config.json', 'utf8');

const configObject = JSON.parse(config) || { port: 80 };

console.log({ configObject });

// Bard comments:
// I apologize for the error. I am still under development and learning
// to generate code that is correct and error-free.
