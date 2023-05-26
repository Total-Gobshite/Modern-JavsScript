let output;
let name = 'John';
let age = 25;

// concatination
output = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
console.log(output); // uses single quotes and plus signs

// template string
output = `Hello, my name is ${name} and I am ${age} years old.`; // uses backticks
console.log(output);

// template strings can include expressions
output = `Hello, my name is ${name} and I am ${age + 5} years old.`;
console.log(output);

// properties and methods
output = name.length; // length is a property therefore no parenthesis. Methods have parenthesis.
// methods are functions. properties are attributes.
console.log(output);

output = name[3]; // returns the character at index 3
console.log(output);

// deep dive into strings
// strings are primitives
// access to properties and methods are because of string object wrapper
// this is done behind the scenes, but would look like this:
output = new String(`${name}`).length; // turns string primitive into String object
console.log(output);

// prototype methods
output = name.__proto__; // returns the prototype of the string object
console.log(output); // returns the string object where you can see all the methods

// change case
output = name.toUpperCase(); // converts to uppercase
console.log(output);

output = name.toLowerCase(); // converts to lowercase
console.log(output);

// char at index
output = name.charAt(2); // returns the character at index 2
console.log(output);

// get index of character
output = name.indexOf('h'); // returns the index of the first occurence of the character
console.log(output); // returns -1 if character is not found
// if there's more than one occurence, it will return the first occurence

// access range of values by index
output = name.substring(1); // returns the characters from index 1 to the end
console.log(output);

output = name.substring(0, 2); // returns the first two characters
console.log(output);

// slice
output = name.slice(0, 2); // returns the first two characters
console.log(output);

// slice vs substring
// substring cannot accept negative values
// slice can accept negative values
output = name.slice(-3); // returns the last three characters
console.log(output);

// trim
let str = '     Hello World     ';
output = str.trim(); // removes whitespace from beginning and end
console.log(output);

// replace
output = str.replace('World', 'There'); // replaces the first occurence of the first argument with the second argument
console.log(output);

// includes
output = str.includes('Hello'); // returns true if the string contains the argument
console.log(output);

// valueOf
output = str.valueOf(); // returns the primitive value of the string object
console.log(output);

// split
output = str.split(' '); // splits the string into an array of substrings. Takes separator as argument
console.log(output);

output = str.split(''); // splits the string into an array of substrings. Takes separator as argument
console.log(output);