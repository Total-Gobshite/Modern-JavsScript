/** 
 * Common & practical methods of selecting single elements
 * You wouldn't use these to get more than one element (say all <p> tags)
 */

// ------ getElementById ------
// Returns the element with the specified ID
// If no matching element is found, it returns null
// Only returns one element (the first one it finds)
console.log('------ getElementById ------');

console.log(document.getElementById('app-title')); // grabs the H1 element
console.log(document.getElementById('app-title').getAttribute('id')); // grabs the ID attribute
console.log(document.getElementById('app-title').getAttribute('class')); // // returns null if no attribute is found

// set attributes
document.getElementById('app-title').title = 'My Shopping List'; // sets the title attribute
console.log(`Title: ${document.getElementById('app-title').title}`);
// hover over the H1 to see the title
document.getElementById('app-title').setAttribute('title', 'My ShOpPiNg LiSt'); // sets the title attribute, first param is the attribute name, second is the value
console.log(`Title: ${document.getElementById('app-title').title}`);

// what's the difference between setAttribute and .title?
// they do the same thing

// you can put the getElementById in a variable
const appTitle = document.getElementById('app-title');
console.log(appTitle);

// get/change content
console.log(appTitle.textContent); // gets the text content
appTitle.textContent = 'My Shopping List'; // changes the text content
console.log(appTitle.textContent);

appTitle.textContent = '<u>My Shopping List</u>'; // this will print the tags as text: <u>My Shopping List</u>
appTitle.innerHTML = '<u>My Shopping List</u>'; // wraps in underline tags

// change styles -- can edit CSS
appTitle.style.color = 'red'; // changes the color to red
// appTitle.style.background-Color = 'black'; // will not work because of the dash, use camelCase
appTitle.style.backgroundColor = 'black'; // changes the background color to black
appTitle.style.padding = '10px'; // adds padding
appTitle.style.borderRadius = '15px'; // adds rounded corners

// ------ querySelector ------
// Returns the first element that matches a specified CSS selector(s) in the document
// If no matching elements are found, it returns null
// Only returns one element (the first one it finds)
// before we use querySelector, you had to add id's or classes to get elements
console.log('------ querySelector ------');

console.log(document.querySelector('h1')); // grabs the first H1 element
console.log(document.querySelector('#app-title')); // grabs by ID
console.log(document.querySelector('.container')); // grabs by class
console.log(document.querySelector('input[type="text"]')); // grab by attribute
console.log(document.querySelector('li:nth-child(2)').innerText); // can use pseudo selectors, this grabs the 2nd list item

const secondListItem = document.querySelector('li:nth-child(2)');
secondListItem.innerText = 'Apple Juice'; // changes text
secondListItem.style.color = 'red'; // changes color

// are able to use these methods on other elements
const list = document.querySelector('ul'); // entire list
console.log(list);
// can use query selector on list to get a specific list item
const firstListItem = list.querySelector('li:first-child');
console.log(firstListItem.innerText);