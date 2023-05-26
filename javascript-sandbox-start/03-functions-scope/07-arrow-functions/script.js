// arrow functions are compact, have implicit return, and lexical scope
// arrow functions are not hoisted

// FUNCTION DECLARATION
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));

// --------------------------------------------------
// FUNCTION EXPRESSION ARROW FUNCTION
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 5));

// --------------------------------------------------
// SHORTER FUNCTION -- WITHOUT RETURN KEYWORD -- IMPLICIT RETURN
const multiply = (a, b) => a * b;
console.log(multiply(5, 5));

// --------------------------------------------------
// ARROW FUNCTIONS WITH ONE PARAMETER
const double = a => a * 2; // no parentheses needed
console.log(double(5));

// --------------------------------------------------
// ARROW FUNCTION RETURNING OBJECT -- cos objects use {} symbol
const createObject = () => { // to fix this, wrap the object in parentheses ()
    name: 'Brad'
};
console.log(createObject()); // undefined

const createObject2 = () => ({
    name: 'Brad'
});
console.log(createObject2()); // { name: 'Brad' }

// --------------------------------------------------
// HIGHER ORDER FUNCTIONS
// functions that operate on other functions, either by taking them as arguments or by returning them
// functions that can be assigned to a variable, passed into another function, or returned from another function

const numbers = [1, 2, 3, 4, 5];

// the forEach method takes a function as a parameter
numbers.forEach(function (n) { // logs each number in the array
    console.log(n);
});

// with arrow function
numbers.forEach(n => console.log(n));