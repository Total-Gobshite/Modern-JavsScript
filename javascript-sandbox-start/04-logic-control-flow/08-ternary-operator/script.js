// Ternary operator -- shorter way of writing if/else statements
// syntax: condition ? expression-if-true : expression-if-false

const age = 19;

// if statement
if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote. Get old.');
}

// ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote. Get old.');

// ------ Assigning conditional values ------
console.log('------ Assigning conditional values ------');
const canVote = age >= 18 ? true : false;
console.log(`Can they vote? ${canVote}`);

const canVote2 = age >= 18 ? 'yup' : 'nahp';
console.log(`Can they vote? ${canVote2}`);

// ------ Multiple statements ------
console.log('------ Multiple statements ------');
const auth = true;

// if statement
let redirect;
if (auth) {
    console.warn('Welcome to the dashboard you prick');
    redirect = '/dashboard';
} else {
    console.warn('Access denied, haha get fucked');
    redirect = '/login';
}
console.log(redirect);

// ternary operator
const redirect2 = auth
    ? (console.warn('Welcome to the dashboard you prick'), '/dashboard')
    : (console.warn('Access denied, get fucked you shit'), '/login');
console.log(redirect2);
// multiple statements summary: condition ? (multiple-statements-if-true) : (multiple-statements-if-false);
// each statement within the parentheses are seperated by commas (statement1, statement2)

// ------ && operator as shorthand if you don't need/want an else ------
console.log(`------ && operator as shorthand if you don't need/want an else ------`);
const auth2 = true;
// auth2 ? console.log('Welcome to the dashboard'); // Uncaught SyntaxError: Unexpected token ';'
// you can't have the true without the false on a ternary

auth2 ? console.log('Welcome to the dashboard') : null; // could specify do nothing if false

auth && console.log('Welcome to the dashboard'); // remember in logical assignment, && actions (not assigning here) the right side value only if the left is a truthy value.
console.log(auth);