'use strict';

// Prompt: Avoid default config duplication and we need configObject
// to be accessible after try block
// Reply: You are correct, we can avoid default config duplication
// by assigning the default value to the configObject variable outside
// of the try block. We can also make the configObject variable accessible
// after the try block by declaring it as a let or const variable.

// Here is the optimized version of the code that avoids default config
// duplication and makes the configObject variable accessible after the try
// block:

const fs = require('node:fs').promises;

let configObject = { port: 80 };

try {
  const config = await fs.readFile('config.json', 'utf8');
  configObject = JSON.parse(config) || configObject;
} catch (err) {
  console.error('Error reading config file:', err);
}

console.log({ configObject });

// Bard comments:
// This code will try to read the config.json file. If the file is not found,
// the configObject variable will not be changed. If the file is found,
// the value of the config.json file will be parsed and assigned to
// the configObject variable.
//
// I hope this helps!
