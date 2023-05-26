let output;

// 1 way of defining an object and adding properties
const todo = {};
todo.id = 1;

output = todo;
console.log(output);

// 2nd way with object constructor
const todo2 = new Object();
todo2.id = 2;

output = todo2;
console.log(output);

// NESTING
const person = {
    name: 'John',
    age: 30,
    address: { // nested object
        city: 'Boston', // nested property
        state: 'MA' // nested property
    },
    hobbies: ['music', 'movies', 'sports'],
    getBirthYear: function() { // nested function
        return 2023 - this.age;
    }
}

output = person.address.city;
console.log(output);

// SPREAD OPERATOR
const ob1 = { a: 1, b: 2 };
const ob2 = { c: 3, d: 4 };

const ob3 = { ob1, ob2 };
console.log(ob3);

const ob4 = { ...ob1, ...ob2 };
console.log(ob4);

// ASSIGN METHOD FOR OBJECTS -- Used before spread operator existed
const ob5 = Object.assign(ob1, ob2);
console.log(ob5);

// ARRAY OF OBJECTS
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1]); // access object
console.log(todos[1].text); // access object property

// GET ALL KEYS FROM OBJECT AND PUT THEM INTO ARRAY
const ob4Keys = Object.keys(ob4);
console.log(ob4Keys);

// HOW MANY PROPERTIES IN OBJECT
console.log(ob4.length); // undefined
console.log(ob4Keys.length); // length of keys to count properties

// GET ALL VALUES FROM OBJECT AND PUT THEM INTO ARRAY
const ob4Values = Object.values(ob4);
console.log(ob4Values);

// GET ALL KEY-VALUE PAIRS FROM OBJECT AND PUT THEM INTO ARRAY
const ob4Entries = Object.entries(ob4);
console.log(ob4Entries);

// FINDING OUT IF OBJECT HAS A PROPERTY
console.log(todos[0].hasOwnProperty('text')); 
