// FUNCTION DECLARATION
console.log(addDollarSign(5)); // hoisting example, this is above the function declaration but still works

function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(5));

// --------------------------------------------------
// FUNCTION EXPRESSION
console.log(addPoundSign(5)); // this will not work -- ReferenceError: Cannot access 'addPoundSign' before initialization

const addPoundSign = function (value) {
    return '£' + value;
};

console.log(addPoundSign(5));

// --------------------------------------------------

// invoked the same way
// declared differently
// expression is a function assigned to variable
// difference is hoisting

// hoisting is a process of moving function and variable declarations to the top of the file, only function declarations are available before the code is executed
// if you had a call to a function EXPRESSION before it was declared, you would get an error
// if you had a call to a function DECLARATION before it was declared, it would work
