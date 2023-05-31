// Any HTML on the page is an 'element' and therefore an 'element node'.

let output;

// ------ Get child elements ------
const parent = document.querySelector('.parent'); // gets div with class of parent
// dot for CSS classes
// no-dot for HTML tags
console.log(parent);
console.log(parent.children); // returns a HTMLCollection of all child elements
console.log(parent.children[0]); // returns the first child element
console.log(parent.children[0].innerText); // returns the first child element's innerText
console.log(parent.children[1].nodeName); // returns the second child element's nodeName -- DIV

// by traversing (not specifying the element exactly) we can change its colour, text, etc.
parent.children[0].innerText = 'Child One';
parent.children[0].style.color = 'red';

// first and last element child
console.log(parent.firstElementChild.innerText); // returns the first element child
console.log(parent.lastElementChild.innerText); // returns the last element child

// Note: firstChild and lastChild will return the first and last child nodes, which may not be elements.

// ------ Get parent element from a child ------
const child = document.querySelectorAll('.child')[0]; // first child in node-list of all childs

console.log(child.parentElement); // gives the parent element
child.parentElement.style.border = '1px solid #ccc'; // adding border on parent div
child.parentElement.style.padding = '10px'; // adding padding on parent div


// ------ Sibling elements ------
// const secondChild = document.querySelector('child.nth-child(2)'); // second child using css pseudo selector
const secondChild = document.querySelectorAll('.child')[1]; // second child in node-list of all childs
console.log(secondChild);

console.log(secondChild.previousElementSibling.innerText); // returns the previous sibling element and grabs the text
console.log(secondChild.nextElementSibling.innerText); // returns the next sibling element and grabs the text

secondChild.nextElementSibling.style.color = 'green'; // changing the color of the next sibling element

// Note: previousSibling and nextSibling will return the previous and next sibling nodes, which may not be elements.
// console.log(secondChild.previousSibling); // returns the previous sibling node
// console.log(secondChild.nextSibling); // returns the next sibling node

