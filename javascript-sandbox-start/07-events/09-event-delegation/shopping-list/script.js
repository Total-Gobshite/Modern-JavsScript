// Useful for adding an event listener to multiple elements -- i.e. delete buttons

// ------ Method 1: Adding event listener to every one ------
const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//     // Adds event listener to every item which when clicked prints out that item's HTML
//     // item.addEventListener('click', (e) => {
//     //     console.log(e.target);
//     // });

//     item.addEventListener('click', (e) => {
//         e.target.remove(); // removes item from DOM
//     });
// });

// ------ Method 2: ------
// Adds a single event listener to the parent and then target whichever one we want to delete
const parent = document.querySelector('ul');
parent.addEventListener('click', (e) => {
    // console.log(e.target); // will print element selected within 'ul'
    // target will give you what you click on
    // currentTarget will give you what the event listener is on (the parent)

    if (e.target.tagName === 'LI') { // if the target selected within parent is an LI tag
        e.target.remove();
    }
});

// highlights element that has mouse over
parent.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.outlineStyle = 'solid';
        e.target.style.outlineColor = 'blue';
        e.target.style.outlineWidth = '2px';
    } 
});

// removes highlight when mouse moves out of element
parent.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.outlineStyle = 'none';
    }
});