// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
console.log(`Original value: ${myString}`);

const myNewString = myString[0].toUpperCase() + myString.slice(1);
console.log(`New value: ${myNewString}`);