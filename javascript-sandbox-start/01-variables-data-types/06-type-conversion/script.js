// Type conversion is the process of converting one type of value to another type, for example from a string to a number or vice versa.

// There are two types of type conversion:
// 1. Implicit conversion: JavaScript automatically converts one type to another type.
// 2. Explicit conversion: You explicitly convert one type to another type using the built-in functions.

// converting string to number
console.log('converting string to number');
let string = '100';

let string1 = parseInt(string); // 100
let string2 = parseFloat(string); // 100.00
let string3 = +string; // 100 -- newer method using unary operator
let string4 = Number(string); // 100

console.log(string, typeof string); // 100 string
console.log(string1, typeof string1); // 100 number
console.log(string2, typeof string2); // 100 number
console.log(string3, typeof string3); // 100 number
console.log(string4, typeof string4); // 100 number

// converting number to string
console.log('converting number to string');
let number = 100;

let number1 = number.toString(); // '100'
let number2 = String(number); // '100'

console.log(number, typeof number); // 100 number
console.log(number1, typeof number1); // '100' string
console.log(number2, typeof number2); // '100' string

// converting decimal-in-a-string to a number
console.log('converting decimal-in-a-string to a number');
let decimalAsAString = '99.5';

let decimalAsAString1 = parseInt(decimalAsAString); // 99 -- parseInt() does not work with decimals
let decimalAsAString2 = parseFloat(decimalAsAString); // 99.5
let decimalAsAString3 = +decimalAsAString; // 99.5 -- unary operator
let decimalAsAString4 = Number(decimalAsAString); // 99.5

console.log(decimalAsAString, typeof decimalAsAString); // 99.5 string
console.log(decimalAsAString1, typeof decimalAsAString1); // 99 number
console.log(decimalAsAString2, typeof decimalAsAString2); // 99.5 number
console.log(decimalAsAString3, typeof decimalAsAString3); // 99.5 number
console.log(decimalAsAString4, typeof decimalAsAString4); // 99.5 number

// converting number to boolean
console.log('converting number to boolean');
let numberToBoolean = 1; // 0 is false, 1 is true, any other number is true

let numberToBoolean1 = Boolean(numberToBoolean); // true
let numberToBoolean2 = !!numberToBoolean; // true -- double negation
let numberToBoolean3 = !numberToBoolean; // false -- single negation

console.log(numberToBoolean, typeof numberToBoolean); // 1 number
console.log(numberToBoolean1, typeof numberToBoolean1); // true boolean
console.log(numberToBoolean2, typeof numberToBoolean2); // true boolean
console.log(numberToBoolean3, typeof numberToBoolean3); // false boolean

// converting string-which-isn't-a-number to number
console.log('converting string-which-isn\'t-a-number to number');
let stringWhichIsntANumber = 'hello';

let stringWhichIsntANumber1 = parseInt(stringWhichIsntANumber); // NaN
let stringWhichIsntANumber2 = parseFloat(stringWhichIsntANumber); // NaN
let stringWhichIsntANumber3 = +stringWhichIsntANumber; // NaN
let stringWhichIsntANumber4 = Number(stringWhichIsntANumber); // NaN

console.log(stringWhichIsntANumber, typeof stringWhichIsntANumber); // hello string
console.log(stringWhichIsntANumber1, typeof stringWhichIsntANumber1); // NaN number
console.log(stringWhichIsntANumber2, typeof stringWhichIsntANumber2); // NaN number
console.log(stringWhichIsntANumber3, typeof stringWhichIsntANumber3); // NaN number
console.log(stringWhichIsntANumber4, typeof stringWhichIsntANumber4); // NaN number

// NaN 'not a number'. There are 5 operations that return NaN:
// 1. When a number can't be parsed (e.g. parseInt('hello')).
// 2. Math operations where the result is not a real number (e.g. Math.sqrt(-1)).
// 3. Operand of an argument is NaN (e.g. 100 * NaN).
// 4. Undefined is passed as an argument to a math function (e.g. console.log(undefined + undefined)).
// 5. Any operation that involves a string and is not an addition operation (e.g. 'hello' / 5).

