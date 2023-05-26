let output;
// Object that contains key-value pairs
const objectLiteral = {
    key1: 'value1',
    key2: 'value2',
}
console.log(objectLiteral);

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
}
console.log(person);

// 1. Accessing object properties -- use the dot notation
output = person.name;
console.log(output);

output = person['name'];
console.log(output);

// 2. Object within object
const person2 = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '50 Main St',
        city: 'Boston',
    }
}
console.log(person2);

output = person2.address.city;
console.log(output);

output = person2['address']['city'];
console.log(output);

// 3. Arrays within objects
const person3 = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '50 Main St',
        city: 'Boston',
    },
    phones: [
        '555-555-5555',
        '666-666-6666',
    ]
}
console.log(person3);

output = person3.phones;
console.log(output);

output = person3['phones'];
console.log(output);

output = person3.phones[0];
console.log(output);

output = person3['phones'][0];
console.log(output);

// 4. Updating object properties
person3.name = 'Jane Doe';
console.log(person3);

person3['name'] = 'Jonathan Doe';
console.log(person3);

// 5. Removing property
delete person3.age;
console.log(person3);

// 6. Adding property
person3.age = 35;
console.log(person3);

// 7. Adding function as property
const person4 = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '50 Main St',
        city: 'Boston',
    },
    phones: [
        '555-555-5555',
        '666-666-6666',
    ],
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}
console.log(person4);
person4.greet();