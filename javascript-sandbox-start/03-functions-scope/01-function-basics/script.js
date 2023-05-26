// 1. function without parameters
function sayHello() {
    // function body
    console.log('Hello World!');
}
// call the function
sayHello();

// 2. function with parameters
function add(num1, num2) { // num1 and num2 are parameters
    console.log(num1 + num2);
}
add(2, 3); // these are arguments

// 3. function with return value
function subtract(num1, num2) {
    return num1 - num2;
}
const result = subtract(5, 2);
console.log(result, subtract(55, 28));