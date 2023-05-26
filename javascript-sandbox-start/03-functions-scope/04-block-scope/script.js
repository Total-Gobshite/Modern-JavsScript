let global = 100;

// 1. Accessing global scope within blocks, totally fine
if (true) {
    console.log('1. Accessing global scope within blocks, totally fine ', global);
}

// 2. Accessing local scope within blocks
if (true) {
    let local = 200;
    console.log('2. Accessing local scope within blocks ', local);
}
// console.log('2. Accessing local scope globally ', local); // ReferenceError: local is not defined

// 3. Difference between var, let, const
// var is function scoped
// let and const are block scoped

if (true) {
    let letVariable = 400;
    const constVariable = 500;
    var varVariable = 300;
}
// console.log('3. letVariable ', letVariable); // ReferenceError: letVariable is not defined
// console.log('3. constVariable ', constVariable); // ReferenceError: constVariable is not defined
console.log('3. varVariable ', varVariable); // 300

// note that var is the only one that is not impacted by the block scope

function run() {
    var varVariable2 = 900;
    console.log('varVariable within function  ', varVariable2);
}
run();
// console.log('varVariable outside function  ', varVariable2); // ReferenceError: varVariable2 is not defined

// var does not work outside of functions
// let and const both replace var, it's not great to have variables work outside of block scope
// var is legacy

// global variables created with var are added to the global window object
const notAddedToWindowObject = 2000;
var addedToWindowObject = 3000;
// go into console, type window and hit enter, at the top you'll see addedToWindowObject var!