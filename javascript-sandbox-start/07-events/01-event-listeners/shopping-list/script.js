// ====== EVENTS ======
// Events are when something happens in the browser, which can be detected and responded to with code.
// These include user interactions such as clicks, key presses, or page loads, and programmatic changes like data fetches or errors.

// ~~~~~~ GLOBAL VARIABLES ~~~~~~
const clearBtn = document.querySelector('#clear');

// ====== Adding Event Listeners ======
// ------ Method 1: Not recommended way of adding event listener ------
// ------------------- Inline Event Handlers -------------------
function onClear() {
    console.warn('Clearing the list');
}

// here's the HTML
// <button id="clear" class="btn-clear" onclick="onClear()">Clear All</button>

// Don't use inline event handlers

// ------ Method 2: JavaScript Event Listener
// clearBtn.onclick = function () {
//     console.warn('Clearing the list');
// }

// ------ Method 3: Modern Recommended Way ------
// ---------- addEventListener -----------
// 1. Take DOM element
// 2. Add a listener for a specific event with addEventListener

// addEventListener takes 2 arguments
// 1. The event to listen for https://developer.mozilla.org/en-US/docs/Web/Events
// 2. The function to run when the event occurs

// clearBtn.addEventListener('click', () => console.warn('Clearing the list'));

// ------ multiple event listeners ------
// you can the same event listener to the same element multiple times but only with the addEventListener method
// clearBtn.addEventListener('click', () => console.warn('Clearing the list'));
// clearBtn.addEventListener('click', () => console.warn('Are you sure?'));
// clearBtn.addEventListener('click', () => console.error('Last chance!'));

// the same would not work if you used the onclick method
// clearBtn.onclick = () => console.warn('Clearing the list');
// clearBtn.onclick = () => console.warn('Are you sure?');
// clearBtn.onclick = () => console.error('Last chance!'); // this would override the previous onclicks

// addEventListener can take a declared function, an anonymous function, or an arrow function
// clearBtn.addEventListener('click', onClear); // method 1's function


// ====== Removing Event Listeners ======
// you would only remove an event listener if:
//   - you remove the element from the DOM
//   - no longer need event listener

// ------ removeEventListener ------
// calling removeEventListener 5 seconds after the page loads
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000); // setTimeout parameters: function to execute, time in milliseconds
// removeEventListener parameters: event to remove, function to remove

// limitation: you cannot remove event listeners that use anonymous functions (lines 38 - 40)
// either avoid anonymous functions for event listeners for better control or clone the DOM element and replace it with the new one to remove the attached event listeners
// let newClearBtn = clearBtn.cloneNode(true);
// clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);

// ====== Triggering events programatically ======
// setTimeout(() => clearBtn.click(), 5000); // after 5 seconds, the clear button will be clicked

// ====== Making the 'Clear All' button work ======
const clearBtn2 = document.querySelector('#clear');
const parent = document.querySelector('.items');

// ------ my way ------
// function clearList() {
//     const list = document.querySelectorAll('.items li');
//     list.forEach(item => item.remove());
// }

// clearBtn2.addEventListener('click', clearList);

// ------ most performant ------
function clearListPerformant() {
    while (parent.firstChild) { // while there's an item in the first portion of the list
        parent.removeChild(parent.firstChild); // remove first item
    }
}

clearBtn2.addEventListener('click', clearListPerformant);

// ~~~~~~ LIST OF EVENTS TO LISTEN FOR WITH ADDEVENTLISTENER ~~~~~~
// User Interface Events:
// load
// unload
// resize
// scroll

// Focus Events:
// focus
// blur

// Mouse Events:
// click
// dblclick
// mousedown
// mouseup
// mousemove
// mouseover
// mouseout
// mouseenter
// mouseleave
// contextmenu

// Keyboard Events:
// keydown
// keyup
// keypress

// Form Events:
// submit
// change
// input
// reset

// Drag and Drop Events:
// dragstart
// drag
// dragenter
// dragleave
// dragover
// drop
// dragend

// Clipboard Events:
// cut
// copy
// paste

// Media Events:
// play
// pause
// ended

// Touch Events:
// touchstart
// touchend
// touchmove
// touchcancel

// WebRTC Events:
// icecandidate
// negotiationneeded
// signalingstatechange
// addstream
// removestream