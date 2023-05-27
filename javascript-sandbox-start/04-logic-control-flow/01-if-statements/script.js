// ------ IF STATEMENT ------
if (true) {
    console.log('This is true!');
}

if (false) {
    console.log('This is false!');
}

// if the condition is true, the code inside the curly braces will be executed
// if the condition is false, the code inside the curly braces will not be executed

// ------ OPERATORS ------
let x = 10;
let y = 5;

// greater than
if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

// equal to and equal type
if (x === 10) {
    console.log(`${x} is equal to 10`);
} else { // if the 'if' condition is not true, the 'else' condition will be executed
    console.log(`${x} is not equal to 10`);
}

// less than
if (x < 8) {
    console.log(`${x} is not less than 88`);
} else { // if the 'if' condition is not true, the 'else' condition will be executed
    console.log(`${x} is less than 88`);
}

// `var` is function scoped. `const` and `let` are block scoped.

// ------ SHORTHAND IF STATEMENT ------
// in summary: without curly braces

// single-line
if (x === 10) console.log(`${x} is equal to 10`);

// multi-line
if (x === 10) console.log(`${x} is equal to 10`), 
    console.log(`${x} is equal to 10`),
    console.log(`${x} is equal to 10`);

// with the `else`
if (x !== 10) console.log(`${x} is not equal to 10`);
else console.log(`${x} is equal to 10 (no way...)`);

