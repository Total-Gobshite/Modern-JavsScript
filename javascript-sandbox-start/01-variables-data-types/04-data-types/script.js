// string -- sequence of characters
// number -- integer, float
// boolean -- true, false
// null -- empty
// undefined -- not defined or assigned
// symbol -- unique identifier
// BigInt -- large integers
// object -- collection of data

// reference data types (objects)
// when assigned to a variable, a reference to the object is stored in that variable
// array -- list of data
// object literal -- collection of properties
// function -- reusable block of code

// static vs dynamic typing
// dynamic -- do not need to specify data type (JavaScript, Python, Ruby)
// static -- must specify data type (TypeScript, Java, C#)

// Instructor: I use const by default, unless I know I need to reassign the variable

// string
const firstName = 'Ibrahim';
console.log(firstName, 'is of type', typeof firstName);

// number
const age = 30;
console.log(age, 'is of type', typeof age);

// decimal
const price = 19.99;
console.log(price, 'is of type', typeof price);

// boolean
const isMarried = true;
console.log(isMarried, 'is of type', typeof isMarried);

// null
const car = null;
console.log(car, 'is of type', typeof car);
// returns object, but it is a bug in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

// undefined
let house;
console.log(house, 'is of type', typeof house);

// symbol
const id = Symbol('id');
console.log(id, 'is of type', typeof id);

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber, 'is of type', typeof bigNumber);

// Reference Data Types
// array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers, 'is of type', typeof numbers);
// returns object, but it is an array
// remember any reference data type returns object

// object literal
const person = {
    firstName: 'Ibrahim',
    lastName: 'Abdul-Matin',
    age: 30,
    isMarried: true,
    car: null,
    house: undefined,
    id: Symbol('id'),
    bigNumber: 1234567890123456789012345678901234567890n,
    numbers: [1, 2, 3, 4, 5],
    sayHello: function() {
        console.log('Hello');
    }
};
console.log(person, 'is of type', typeof person);

// function
function sayHello() {
    console.log('Hello');
} 
console.log(sayHello, 'is of type', typeof sayHello);
// returns function, but it is an object function
// https://262.ecma-international.org/11.0/#sec-ecmascript-function-objects
