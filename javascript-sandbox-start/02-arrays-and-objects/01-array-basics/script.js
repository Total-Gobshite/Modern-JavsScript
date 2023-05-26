let output;

// Array Literals
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Array Constructor
const fruits = new Array('apple', 'orange', 'pear', 'grape');
console.log(fruits);

// Arrays can hold different data types
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
console.log(mixed);

// Accessing specific index
output = fruits[1];
console.log(output); // orange

// Adding two indexes together
output = numbers[0] + numbers[1];
console.log(output); // 3

output = fruits[0] + fruits[1];
console.log(output); // appleorange

// Template literals
output = `${fruits[0]} ${fruits[1]}`;
console.log(output); // appleorange

// length
output = numbers.length;
console.log(output); // 5 (starts at 1)

output = fruits.length;
console.log(output); // 4 (starts at 1)

// Changing an indexes value
console.log(fruits); // ["apple", "orange", "pear", "grape"]
fruits[2] = 'banana';
console.log(fruits); // ["apple", "orange", "banana", "grape"]

fruits.length = 2;
console.log(fruits); // ["apple", "orange"]
// you can set the length of an array, this'll remove indexes after the number you set

// Adding to the end of an array
fruits[fruits.length] = 'mango';
fruits[fruits.length] = 'peach';
console.log(fruits); // ["apple", "orange", "mango", "peach"]
// The array size is dynamic so you may not know which index to use, so you can use the length property to always add to the end (if you're not wanting to use the specific method)