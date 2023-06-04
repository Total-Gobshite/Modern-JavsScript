const logo = document.querySelector('img');

const onClick = () => console.log('You clicked the logo!');
const onDoubleClick = () => {
    // console.log(document.body.style.backgroundColor); // returns empty string cos color in style is not inline HTML
    // console.log(window.getComputedStyle(document.body).backgroundColor); // gets computed style, including those in CSS stylesheets
    document.body.style.backgroundColor === 'rgb(252, 229, 229)' ? document.body.style.backgroundColor = 'rgb(245, 245, 245)' : document.body.style.backgroundColor = 'rgb(252, 229, 229)'; // toggles background color
    // console.log(window.getComputedStyle(document.body).backgroundColor);
};
const onRightClick = () => console.error(`oi! don't right click me!`);

// hehe flashing lights
const onMouseDown = () => document.body.style.backgroundColor = 'black';
const onMouseUp = () => document.body.style.backgroundColor = 'yellow';
const onClick2 = () => setTimeout(() => document.body.style.backgroundColor = 'white', 0250); // delay of 0.25s otherwise onClick overrides onMouseUp

// ------ event listeners ------
// clicks
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
// click and hold
document.addEventListener('mousedown', onMouseDown); // fires when you click and hold the mouse button
document.addEventListener('mouseup', onMouseUp); // fires when you release the mouse button
// scroll wheel
document.addEventListener('click', onClick2); // order of mouse click: mousedown -> mouseup -> click
document.addEventListener('wheel', () => console.error('You bastard! Don\'t scroll!')); // fires when you scroll
// hover
logo.addEventListener('mouseover', () => console.warn('You hovered over the logo!')); // fires when you hover over the logo
logo.addEventListener('mouseout', () => console.warn('You hovered out of the logo!')); // fires when you hover out of the logo
// dragging
logo.addEventListener('dragstart', () => console.log('You started dragging the logo!')); // fires when you start dragging the logo
logo.addEventListener('drag', () => console.log('You are dragging the logo!')); // fires when you are dragging the logo
logo.addEventListener('dragend', () => console.log('You stopped dragging the logo!')); // fires when you stop dragging the logo
// document.body.style.backgroundColor = '#FCE5E5';