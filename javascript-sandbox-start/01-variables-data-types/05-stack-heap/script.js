// primitive types: stored in stack and accessed by value
// e.g. number, string, boolean, null, undefined, symbol, bigint
// reference types: stored in heap and accessed by reference
// e.g. object, array, function

// primitive types copy value
let name = 'John'; // name = 'John'
let name2 = name; // name2 = 'John'
name = 'Peter'; // name = 'Peter'. name2 = 'John'. Primitive types copy value.
console.log(`name: `, name, `name2: `, name2); // Peter John

// reference types point to same reference
const person = { name: 'John' }; // person = { name: 'John' }
const person2 = person; // person2 = { name: 'John' }
person.name = 'Peter'; // person = { name: 'Peter' } and person2 = { name: 'Peter' } because reference types point to same reference.
console.log(`person: `, person, `person2: `, person2); // { name: 'Peter' } { name: 'Peter' }