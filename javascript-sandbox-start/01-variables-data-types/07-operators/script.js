// 1. Arithmetic Operators

let arithmetic1 = 5 + 5; // addition
let arithmetic2 = 5 - 5; // subtraction
let arithmetic3 = 5 * 5; // multiplication
let arithmetic4 = 5 / 5; // division
let arithmetic5 = 5 % 5; // modulus or remainder

console.log(`Addition: ${arithmetic1}`); // 10
console.log(`Subtraction: ${arithmetic2}`); // 0
console.log(`Multiplication: ${arithmetic3}`); // 25
console.log(`Division: ${arithmetic4}`); // 1
console.log(`Modulus: ${arithmetic5}`); // 0

// concatination
let concatination1 = 'Hello ' + 'World';
console.log(`Concatination: ${concatination1}`); // Hello World

// exponential
let exponential1 = 5 ** 5; // 5^5
console.log(`Exponential: ${exponential1}`); // 3125

// increment
let increment1 = 5;
increment1++;
console.log(`Increment: ${increment1}`); // 6

// decrement
let decrement1 = 5;
decrement1--;
console.log(`Decrement: ${decrement1}`); // 4


// 2. Assignment Operators

let assignment1 = 5;
assignment1 += 5; // addition: assignment1 = assignment1 + 5
console.log(`Addition: ${assignment1}`); // 10

let assignment2 = 5;
assignment2 -= 5; // subtraction: assignment2 = assignment2 - 5
console.log(`Subtraction: ${assignment2}`); // 0

let assignment3 = 5;
assignment3 *= 5; // multiplication: assignment3 = assignment3 * 5
console.log(`Multiplication: ${assignment3}`); // 25

let assignment4 = 5;
assignment4 /= 5; // division: assignment4 = assignment4 / 5
console.log(`Division: ${assignment4}`); // 1

let assignment5 = 5;
assignment5 %= 5; // modulus: assignment5 = assignment5 % 5
console.log(`Modulus: ${assignment5}`); // 0

let assignment6 = 5;
assignment6 **= 5; // exponential: assignment6 = assignment6 ** 5
console.log(`Exponential: ${assignment6}`); // 3125

// 3. Comparison Operators

let comparison1 = 5 == 5; // equal value
console.log(`Equal to: ${comparison1}`); // true
comparison1 = 5 == '5';
console.log(`Equal to: ${comparison1}`); // true

let comparison2 = 5 === 5; // equal value and equal type
console.log(`Equal value and equal type: ${comparison2}`); // true
comparison2 = 5 === '5';
console.log(`Equal value and equal type: ${comparison2}`); // false

let comparison3 = 5 != 5; // not equal value
console.log(`Not equal to: ${comparison3}`); // false
comparison3 = 5 != '5';
console.log(`Not equal to: ${comparison3}`); // false

let comparison4 = 5 !== 5; // not equal value and not equal type
console.log(`Not equal value and not equal type: ${comparison4}`); // false
comparison4 = 5 !== '5';
console.log(`Not equal value and not equal type: ${comparison4}`); // true

let comparison5 = 5 > 5; // greater than
console.log(`Greater than: ${comparison5}`); // false
comparison5 = 5 > 4;
console.log(`Greater than: ${comparison5}`); // true

let comparison6 = 5 >= 5; // greater than or equal to
console.log(`Greater than or equal to: ${comparison6}`); // true
comparison6 = 5 >= 4;
console.log(`Greater than or equal to: ${comparison6}`); // true

let comparison7 = 5 < 5; // less than
console.log(`Less than: ${comparison7}`); // false
comparison7 = 5 < 6;
console.log(`Less than: ${comparison7}`); // true

let comparison8 = 5 <= 5; // less than or equal to
console.log(`Less than or equal to: ${comparison8}`); // true
comparison8 = 5 <= 6;
console.log(`Less than or equal to: ${comparison8}`); // true