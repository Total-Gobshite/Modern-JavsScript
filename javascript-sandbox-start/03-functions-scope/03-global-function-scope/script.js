// GLOBAL SCOPE -- Can be accessed anywhere
// Example of global scope: the window object
// if you type 'window.' in the browser console log you'll see all the properties and methods available to you
// the window object is at the top level, you don't even need to reference the Window object
console.log(window.innerWidth);
console.log(innerWidth);

// 1. global scope can be accessed within functions
function run() {
    console.log('1. global scope can be accessed within functions ', window.innerHeight);
}
run();

// 2. global scope variables work the same
const x = 100;
function run2() {
    console.log('2. global scope variables can also be accessed within functions ', x);
}
run2();

// 3. global scope can be accessed within blocks
if (true) { // always true
    console.log('3. global scope can be accessed within blocks too', x);
}

// 4. functions have their own scope
function add() {
    const y = 200; // cos defined in function, it's function scoped
    console.log('4. functions (and blocks) have their own scope ', y);
}
add();

// if (true) {
//     console.log(y); // error: y is not defined
// }

// function add2() {
//     console.log(y); // error: y is not defined
// }

// 5. Variable shadowing -- function variables that are named the same as global variables will take precedence -- function > global
const z = 300;
function add3() {
    const z = 400;
    console.log('5. variable shadowing -- function > global', z);
}
add3();

// 6. to access z from the global scope within a function
const z2 = 300;

function add4() {
    const z2 = 400;
    console.log('6. here is the function scoped const ', z2); // Access the local z2 variable
    // console.log('6. here is the global scope var ', ??? ); // Access the global z2 variable

    // Long story short
    // could use window.z2 if it worked
    // but it doesn't work, so simply rename the variable and don't use the same name for global and function variables
}

add4();
