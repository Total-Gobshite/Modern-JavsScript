// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

var isNotUsedMuchAnymore = 'var is old school';
let varAndLetAreSimilar = 'let is the new var';
console.log(isNotUsedMuchAnymore, '\n', varAndLetAreSimilar);

isNotUsedMuchAnymore = 'var is old school, but still works';
console.log(isNotUsedMuchAnymore);

let empty;
console.log(empty);
if (empty === undefined) {
  console.log('empty is undefined');
}

const constant = 'I cannot be changed';
// constant = 'I cannot be changed';
// const mustBeInitialized;

// Data Types
// Primitive Data Types
// - Stored directly in the location the variable accesses
// - Stored on the stack
// - String, Number, Boolean, Null, Undefined, Symbols(ES6)

// Reference Data Types
// - Accessed by reference
// - Objects that are stored on the heap
// - A pointer to a location in memory
// - Arrays, Object Literals, Functions, Dates, Anything Else...

// Primitive Data Types
// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Reference Data Types
// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object Literal
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);

// Type Conversion
let val;

// Number to string
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);