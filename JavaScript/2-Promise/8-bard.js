'use strict';

// Prompt: Please parse JSON after readFile
// Reply: Sure, here is the optimized version of the code that parses the
// JSON after the readFile() call:

const fs = require('node:fs').promises;

const config = await fs.readFile('config.json', 'utf8') ?
  JSON.parse(config) : { port: 80 };

console.log({ config });

// Bard comments:
// I hope this helps!
