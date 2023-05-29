// DOM: The DOM is like a family tree of everything you see on a webpage. It helps us find and change things. It's an interface allowing us to interact with page elements dynamically.

console.log(window); // highest level of the DOM
console.log(window.document); // second highest level of the DOM (can also use console.log(document) cos window is global)
console.dir(document); // shows properties & methods
console.log(document.documentElement.outerHTML); // shows all HTML in the document
console.log(document.body.outerHTML); // shows all HTML in the body
console.log(document.body.innerHTML); // all within the body tags
console.log(document.body.innerText); // all text within the body tags
console.log(document.links); // all links in the document
console.log(document.links[0]); // first link in the document

// ------ it isn't only getters, we can also set things ------
// document.body.style.backgroundColor = 'grey'; // changes the background colour of the body
// document.body.innerHTML = '<h1>DOM</h1>'; // replaces the innerHTML of the body

// ------ methods ------
document.write('<h1>DOM</h1>'); // writes to document -- not used, there's no targeting, puts it at the end of the document

// ------ selecting elements ------
console.log(document.getElementById('main')); // returns the element with the specified id
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>'; // replaces the inner HTML of the main element 

// ------ querySelector - selects anything you want ------
document.querySelector('#main h1').innerText = 'inner h1 of main'; // selects the first h1 in the main element and changes the text