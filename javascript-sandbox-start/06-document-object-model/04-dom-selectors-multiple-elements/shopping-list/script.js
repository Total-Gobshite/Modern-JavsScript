/**
 * Select all list items and save them to a variable.
 */

// // ------ querySelectorAll ------
// // Returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object
// // NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()
// // The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers
// // can use higher order array methods on NodeLists
// const listItems = document.querySelectorAll('.item'); // grabs all list items
// console.log(listItems); // returns a NodeList
// console.log(listItems[0].innerText); // returns the first list item
// console.log(listItems[1].innerText); // returns the second list item

// // to make all list items red
// // listItems.style.color = 'red'; // this will not work because listItems is a NodeList, not an element
// listItems.forEach(item => item.style.color = 'red'); // changes color for each item
// listItems.forEach((item, index) => index === 1 ? item.remove() : item); // removes the second item

// listItems.forEach((item, index) => index === 0 ? item.innerText = 'Oranges' : item); // changes the first item to Oranges but also removes delete button -- a destructive change
// // to fix this, we can use innerHTML instead of innerText and add the delete button back in
// listItems.forEach((item, index) => {
//     index === 0 ?
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//         : item
// }); 

// ------ getElementsByClassName ------
// Restrictive to only class names
// Returns a collection of all elements in the document with the specified CLASS NAME, as a HTML Collection
const listItems2 = document.getElementsByClassName('item'); // grabs all list items
console.log(listItems2); // returns a HTMLCollection NOT a NodeList
console.log(listItems2[2].innerText); // returns the 3rd list item

// listItems2.forEach(item => console.log(item.innerText)); // won't work, forEach is not a method on HTMLCollection unless the collection is converted to an array

const listItemsArray = Array.from(listItems2); // converts HTMLCollection to an array
listItemsArray.forEach(item => console.log(item.innerText)); // works now

// ------ getElementsByTagName ------
// Restrictive to only tag names
// Returns a collection of all elements in the document with the specified TAG NAME, as a HTML Collection
const listItems3 = document.getElementsByTagName('li'); // grabs all list items
console.log(listItems3); // returns a HTMLCollection NOT a NodeList
console.log(listItems3[3].innerText); // returns the 4th list item


// ------ Attributes, Tags, DOM keywords ------
// Attributes: class, id, name, src, href, etc.
// Tags: div, p, h1, h2, h3, etc.
// Elements: <div class="item">, <p>Paragraph</p>, <h1>Heading 1</h1>, etc.
// DOM keywords: document, window, console, etc.
