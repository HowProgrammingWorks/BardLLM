'use strict';

// Prompt: Actually it tryes to mutate
// configObject = configObject || JSON.parse(config); but can't because of const
// Reply: You are correct, the code tries to mutate configObject but cannot
// because of const. The || operator is a logical OR operator. The logical OR
// operator returns the value of the first operand if it is truthy, or the value
// of the second operand if it is truthy. A falsy value is a value that
// evaluates to false in a Boolean context. Some examples of falsy values are
// null, undefined, false, 0, and the empty string.
//
// In the code above, the value of configObject is { port: 80 }. If JSON.parse
// returns a falsy value, then the value of configObject will not be changed.
// If JSON.parse returns a truthy value, then the value of configObject will
// be overwritten with the value returned by JSON.parse.
//
// However, because configObject is declared with const, it cannot be
// reassigned. This means that the || operator will always return the value
// of configObject, even if JSON.parse returns a truthy value.
//
// To fix this, we can use the ||= operator instead of the || operator.
// The ||= operator is a logical OR assignment operator. The logical OR
// assignment operator returns the value of the first operand if it is truthy,
// or the value of the second operand if it is truthy. The value of the first
// operand is also assigned to the variable.
//
// Here is the code that uses the ||= operator:

const fs = require('node:fs').promises;

const configObject = { port: 80 };

try {
  const config = await fs.readFile('config.json', 'utf8');
  configObject ||= JSON.parse(config);
} catch (err) {
  console.error('Error reading config file:', err);
}

console.log({ configObject });

// Bard comments: This code is functionally equivalent to the previous code,
// but it does not mutate the configObject variable. If the config.json file does
// not exist, then the value of configObject will be the default value,
// { port: 80 }.
//
// I hope this helps!
