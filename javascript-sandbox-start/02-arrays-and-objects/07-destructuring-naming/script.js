const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
}

// if both the key and value are the same, you can just use the key
const person2 = {
    firstName,
    lastName,
    age,
}

console.log(person);
console.log(person2);

// DESTRUCTURING
// Pulling values out of an object

const todo = {
    id: 1,
    text: 'Take out trash',
    user: {
        name: 'John',
    },
}

// const id = todo.id;
// console.log(id); // 1

// destructuring
// const { id } = todo;
// console.log(id); // 1

// destructuring multiple properties
// const { id, text, user } = todo;
// console.log(id, text, user); // 1, 'Take out trash', { name: 'John' }

// destructuring nested objects property
// const { id, text, user: { name } } = todo;
// console.log(name); // John

// renaming destructured properties
const { id, text, user: { name: userName } } = todo;
console.log(userName); // John
console.log(name);

// destructuring objects: {} curly braces
// destructuring arrays: [] square brackets
// DESTRUCTURING ARRAYS
const myArr = [13, 222, 33, 47 ];

const [first, second, ...rest] = myArr;
console.log(first, second, rest); // 13, 222, [33, 47]

// the ...rest operator places the rest of the values into an array -- note ...rest could be renamed to anything, but it's a convention to use ...rest