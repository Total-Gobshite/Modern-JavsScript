// IIFE -- Immediately Invoked Function Expression
// IIFE is a function that is executed right after it is created
// Why? 
// 1. Avoid global scope pollution. 

// otherscript has a global variable called user
// we also want to have a global variable called user
// const user = 'John'; // Uncaught SyntaxError: Identifier 'user' has already been declared

// we can solve this with an iify
(function () {
    const user = 'John';
    console.log(user);
})();

// syntax:
// first parenthesis: unamed function 'function () {}'
// second parenthesis: executes the function '()'

// 2. IIFE's can also contain functions
(function () {
    const hello = () => console.log('Hello World');
    hello();
}
)();

// hello(); // Uncaught ReferenceError: hello is not defined -- the function is scoped within the IIFE

// 3. IIFE's can also receive parameters
(function (name) {
    console.log(`Hello ${name}`);
})('Shawn'); // parameter passed in second parenthesis ()

// 4. You can name an IIFE
(function greet(name) {
    console.log(`Hello ${name}`);
})('Piotr');

// greet(); // Uncaught ReferenceError: greet is not defined -- the function is scoped within the IIFE
// so you won't see named IIFe's, you can't call them outside of the IIFE
// but you can do recursion within the IIFE but careful, infinite loop!