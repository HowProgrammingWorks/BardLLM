'use strict';

// Prompt: We need to use default value when the file isn't found
// Reply: Sure, here is the optimized version of the code that uses
// a default value when the file is not found:

const fs = require('node:fs').promises;

const config = await fs.readFile('config.json', 'utf8');

const configObject = config ? JSON.parse(config) : { port: 80 };

console.log({ configObject });

// Bard comments:
// This code will use the value of the config.json file if it exists,
// or it will use the default value of { port: 80 } if the file does not exist.
//
// I hope this helps!
