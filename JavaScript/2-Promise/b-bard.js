'use strict';

// Prompt: readFile will throw an error if the file isn't found
// Reply: You are correct, the readFile() method will throw an error if
// the file is not found. We can handle this error by using a try/catch block:

const fs = require('node:fs').promises;

try {
  const config = await fs.readFile('config.json', 'utf8');
  const configObject = JSON.parse(config) || { port: 80 };
  console.log({ configObject });
} catch (err) {
  console.error('Error reading config file:', err);
  const configObject = { port: 80 };
}

// Bard comments:
// This code will try to read the config.json file.
// If the file is not found, the catch block will be executed and
// the default value of { port: 80 } will be used.
//
// I hope this helps!
