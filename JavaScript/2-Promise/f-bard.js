'use strict';

// Prompt: configObject will always equal to { port: 80 } before ||=
// so there is no sense in ||= and even if it could you can't assign
// to constant, and you will get TypeError: Assignment to constant variable.
// Reply: You are correct, configObject will always equal to { port: 80 }
// before ||=. This is because configObject is declared with const, and
// const variables cannot be reassigned.
//
// The ||= operator is a logical OR assignment operator. The logical OR
// assignment operator returns the value of the first operand if it is truthy,
// or the value of the second operand if it is truthy. The value of the first
// operand is also assigned to the variable.
//
// In the code above, the value of configObject is { port: 80 }. The ||=
// operator will always return the value of configObject, even if JSON.parse
// returns a truthy value. This is because configObject is declared with const,
// and const variables cannot be reassigned.
//
// Therefore, there is no need to use the ||= operator in this code. The code
// can be simplified to the following:

const fs = require('node:fs').promises;

const configObject = { port: 80 };

try {
  const config = await fs.readFile('config.json', 'utf8');
  configObject = JSON.parse(config) || configObject;
} catch (err) {
  console.error('Error reading config file:', err);
}

console.log({ configObject });

// Bard comments: This code is functionally equivalent to the previous code,
// but it is simpler and does not use the ||= operator.
//
// I hope this helps!
