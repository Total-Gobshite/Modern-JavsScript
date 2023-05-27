// The Call Stack!
// when a function is called, it opens a new 'execution context' and also gets added to 'the call stack'

// stack is a data structure that stores items in a 'last in, first out' (LIFO) manner -- the last function to come on is the first to come off
// The call stack manages functions (or execution contexts)

// ------ Simple Example ------
const first = () => console.log('first function');
const second = () => console.log('second function');
const third = () => console.log('third function');

first();
second();
third();

// 1. Global Execution Context is created
// 2. first() is called, new execution context created, first() added to call stack
// 3. first() logs 'first function' and is removed from call stack
// 4. second() is called, new execution context created, second() added to call stack
// 5. second() logs 'second function' and is removed from call stack
// 6. third() is called, new execution context created, third() added to call stack
// 7. third() logs 'third function' and is removed from call stack
// Simple because the functions don't call other functions.

// ------ Example 2 ------
const first2 = () => {
    console.log('first function');
    second2();
}

const second2 = () => {
    console.log('second function');
    third2();
}

const third2 = () => {
    console.log('third function');
}

first2();

// 1. Global Execution Context is created
// 2. first2() is called, new execution context created, first2() added to call stack
// 3. first2() logs 'first function' and calls second2()
// 4. second2() is called, new execution context created, second2() added to call stack
// 5. second2() logs 'second function' and calls third2()
// 6. third2() is called, new execution context created, third2() added to call stack
// 7. third2() logs 'third function' and is removed from call stack
// 8. second2() is removed from call stack
// 9. first2() is removed from call stack
// Last In, First Out is what happened here ;)
