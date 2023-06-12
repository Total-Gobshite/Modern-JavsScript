const button = document.querySelector('form button');
const parentOfButton = document.querySelector('form div:nth-child(2)');
const formParentOfButtonAndDiv = document.querySelector('form');


button.addEventListener('click', (e) => {
    e.preventDefault(); // prevents page resetting when submit clicked
    console.warn('button was clicked');
    e.stopPropagation();
})

parentOfButton.addEventListener('click', () => {
    console.log('div was clicked');
});

formParentOfButtonAndDiv.addEventListener('click', () => {
    console.log('form was clicked');
});

document.body.addEventListener('click', () => {
    console.log('body was clicked');
});

// when you click button, it runs both its own eventListener and its parent's eventListener.
// the child click event bubbles up so that any parent that has a click event listener will also fire.

// Events bubble up that have the same event listener
// ^ Document
// | HTML
// | Body
// | Div
// | Button

// to stop this, use stopPropogation() on event object (this is passed as a parameter from addEventListener into your function, just add 'e' or 'event' as your functions parameter.)

// stopImmediatePropogation() is used when you have multiple handlers for the same event and you want to stop the event for all of them. 