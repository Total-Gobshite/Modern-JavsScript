console.log(Math); // Math object -- can view methods and properties

let output;

// square root
output = Math.sqrt(64);
console.log(`Square root of 64 is ${output}`); // 8

// absolute value
output = Math.abs(-3);
console.log(`Absolute value of -3 is ${output}`); // 3

// round
output = Math.round(2.8);
console.log(`Round 2.8 is ${output}`); // 3

// round up
output = Math.ceil(2.4);
console.log(`Round up 2.4 is ${output}`); // 3

// round down
output = Math.floor(2.8);
console.log(`Round down 2.8 is ${output}`); // 2

// power
output = Math.pow(8, 2);
console.log(`8 to the power of 2 is ${output}`); // 64

// min
output = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
console.log(`The minimum number is ${output}`); // -2

// max
output = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
console.log(`The maximum number is ${output}`); // 55

// random number
output = Math.random();
console.log(`A random number between 0 and 1 is ${output}`); // random number between 0 and 1

// random number between 0 and 19
output = Math.random() * 20;
console.log(`A random number between 0 and 19 is ${output}`); // random number between 0 and 19

// random number between 0 and 19 rounded down
output = Math.floor(Math.random() * 20);
console.log(`A random number between 0 and 19 rounded down is ${output}`); // random number between 0 and 19 rounded down

// random number between 0 and 19 rounded up
output = Math.ceil(Math.random() * 20);
console.log(`A random number between 0 and 19 rounded up is ${output}`); // random number between 0 and 19 rounded up
