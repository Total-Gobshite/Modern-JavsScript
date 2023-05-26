// 1. Creating Library

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status: {
            own: false,
            reading: false,
            read: false,
        }
    }, 
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: false,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        status: {
            own: false,
            reading: false,
            read: false,
        }
    },
];
console.log(library);

// 2. Setting all read valies to true
library[0].status.read = true;
library[1].status.read = true;
// library[2].status.read = true;
let { status } = library[2];
status.read = true;
console.log(library);

// 3. Destructure title and rename
const { title: firstBook } = library[0];
console.log(firstBook);

// my solution -- why didn't it rename? 
    // you'd have you use the dot notation to rename the property
    // library[0].title = 'test';
// console.log(`over here`)
// let { title } = library[0]; // extracts title from library[0] and assigns to title variable
// console.log(title);
// title = `firstBook`; // reassigns title variable to firstBook, therefore not impact library array
// console.log(title);
// console.log(JSON.stringify(library[0]));

// 4. Turn library into JSON string
const str = JSON.stringify(library);
console.log(str);