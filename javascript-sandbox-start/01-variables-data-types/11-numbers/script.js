let num = 5;
console.log(typeof num); // 5 is a number
const num_object = new Number(5);
console.log(typeof num_object); // num_object is an object

let output;

// tostring
output = num.toString();
console.log(output); // 5

// calculate how many digits a number has
let num2 = 123456789;
output = num2.toString().length; // numbers don't have the length property, which is why we have to convert it to a string first
console.log(`${num2} has ${output} digits`); // 9

// tofixed -- specify the number to display after decimal point -- this rounds the number
let num3 = 5.125456789;
output = num3.toFixed(2); // 5.12
console.log(`${num3} to 2 decimals is ${output}`);
console.log(typeof output); // string
// tofixed returns a string, so we can't use it for calculations

// toprecision -- specify the number of digits (NOT after decimal point) to display however it doesn't round the number
let num4 = 5.125456789;
output = num4.toPrecision(2); // 5.1
console.log(`${num4} to 2 digits is ${output}`);

// toExponential -- returns a string, rounds the number and write's it using exponential notation
let num5 = 5.125456789;
output = num5.toExponential(2); // 5.13e+0
console.log(`${num5} to 2 digits is ${output}`);

//toLocalString -- returns a string with a language sensitive representation of the number
let num6 = 5.125456789;
output = num6.toLocaleString('ar-EG'); // ٥٫١٢٥
console.log(`${num6} to 2 digits is ${output}`);

// valueOf -- returns the primitive value of a number
let num7 = 5.125456789;
output = num7.valueOf(); // 5.125456789
console.log(`${num7} to 2 digits is ${output}`);

// properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN

// viewing all the methods (check prototype for all methods)
console.dir(Number);