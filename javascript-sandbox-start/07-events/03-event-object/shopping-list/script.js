/* ------ Properties on Event Object ------ */

// - `target` - The element that triggered the event
// - `currentTarget` - The element that the event listener is attached to (These are the same in this case)
// - `type` - The type of event that was triggered
// - `timeStamp` - The time that the event was triggered
// - `clientX` - The x position of the mouse click relative to the window
// - `clientY` - The y position of the mouse click relative to the window
// - `offsetX` - The x position of the mouse click relative to the element
// - `offsetY` - The y position of the mouse click relative to the element
// - `pageX` - The x position of the mouse click relative to the page
// - `pageY` - The y position of the mouse click relative to the page
// - `screenX` - The x position of the mouse click relative to the screen
// - `screenY` - The y position of the mouse click relative to the screen

const logo = document.querySelector('img');
logo.addEventListener('click', function (event) { // event is the event object passed in by the event listener
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    console.log(event.timeStamp);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.offsetX);
    console.log(event.offsetY);
    console.log(event.pageX);
    console.log(event.pageY);
    console.log(event.screenX);
    console.log(event.screenY);
});

function onScroll(e) { // e is the event object
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
}
document.body.addEventListener('wheel', onScroll); // e is passed in as an argument to onWheel from the event listener

// so when do target and currentTarget not equal the same thing?
document.body.addEventListener('click', function (e) {
    // say you clicked on Apples
    console.log(e.target); // this is the li for Apples -- target is whatever I clicked
    console.log(e.currentTarget); // this is the body cos the event is put onto the body -- it's whatever the event is attached to
});

/**
 * H1 will show the x and y coordinates of the mouse when dragging logo 
 */
function onDrag(e) {
    document.querySelector('h1').textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
}
logo.addEventListener('drag', onDrag);

// ------ Prevent Default ------
// preventDefault() is like telling your browser, "Hey, I know what you normally do when this event happens, but this time, don't do it. I've got something else in mind." It's useful when you want to handle things in a special way, like adding your own touch to a button click, instead of just letting the browser do its usual thing.
document.querySelector('a').addEventListener('click', function (e) { // targets link
    e.preventDefault(); // prevents link from going to the href
    console.log('You clicked the link!');
});
// without this, the default behaviour for edge is to open the link in the same tab
