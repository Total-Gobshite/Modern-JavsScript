// ** 
// *  Do not use this
// *  This is for awareness if you come across it or need to support old code
// *

let output;

output = document.all; // deprecated -- collection of all elements in the document
console.log(output);
output = document.all[8]; // can access by index
console.log(output);
output = document.all.length; // number of elements in the document
console.log(output);

output = document.documentElement; // the html element
console.log(output);

output = document.head; // the head element
console.log(output);

output = document.body; // the body element
console.log(output);

output = document.head.children; // collection of everything in the head
console.log(output);

output = document.doctype; // the doctype
console.log(output);
output = document.domain; // the domain
console.log(output);
output = document.URL; // the URL
console.log(output);
output = document.characterSet; // the character set
console.log(output);
output = document.contentType; // the content type
console.log(output);

output = document.forms; // collection of all forms
console.log(output);
output = document.forms[0]; // can access by index
console.log(output);
output = document.forms[0].id; // can access specific attributes
console.log(output);
output = document.forms[0].method; // can access methods
console.log(output);
output = document.forms[0].action; // can access where it goes to
console.log(output);

// document.forms[0].id = "new-id"; // can change attributes
// output = document.forms[0].id;
// console.log(output);

// output = document.links; // collection of all links
// console.log(output); // empty cos no links
// output = document.links[0]; // can access by index
// console.log(output);
// output = document.links[0].href; // get url
// console.log(output);
// output = document.links[0].id = 'google-link'; // can set ID
// console.log(output);
// output = document.links[0].href = 'https://google.com/imghp'; // can set URL
// console.log(output);
// output = document.links[0].className; // can get class name
// console.log(output);
// output = document.links[0].classList; // can get collection of class names
// console.log(output);

output = document.images; // collection of all images
console.log(output);
output = document.images[0]; // can access by index
console.log(output);
output = document.images[0].src; // get url
console.log(output);

// document.forms.forEach(form => console.log(form)); // Uncaught TypeError: document.forms.forEach is not a function
// forEach is not a function for HTML collections
// querySelector gives us a node list which has forEach
// to use forEach you need to convert it to an array

// HTML collections are not arrays, they are array-like
const forms = Array.from(document.forms);
console.log('looping through forms');
forms.forEach(form => console.log(form));
