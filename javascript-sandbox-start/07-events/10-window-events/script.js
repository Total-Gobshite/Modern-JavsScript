// ------ Way back when ------
// When the JS is in the head
// the JS runs before the DOM loads
// so 👇 will recieve an error because DOM hasn't loaded
// document.querySelector('h1').textContent = 'Hello World!'; // Uncaught TypeError: Cannot set properties of null (setting 'textContent')
// the hack around that was putting the function in onLoad
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World!';
// }
// works! onLoad waits for the entire page incl images to load

// Another solution is adding an event listener on load
// ------ Load, the event listener ------
// window.addEventListener('load', () => {document.querySelector('h1').textContent = 'Hello World!'});

// ------ DOMContentLoaded, the event listener ------
// Another solution is an event listener on DOMContentLoaded
// window.addEventListener('DOMContentLoaded', () => {document.querySelector('h1').textContent = 'Hello World!'});

// ------ Load Vs. DOMContentLoaded ------
// Load waits for entire page to load incl. resources like images
// DOMContentLoaded runs as soon as the DOM is parsed and loaded
window.addEventListener('load', () => {console.log('page loaded')});
window.addEventListener('DOMContentLoaded', () => {console.log('DOM loaded')});
// DOM wins!

// ------ Global Scope Vs. Load Vs. DOMContentLoaded ------
console.log('Global scope');
window.addEventListener('load', () => {console.log('page loaded')});
window.addEventListener('DOMContentLoaded', () => {console.log('DOM loaded')});
// Global scope wins! cos we're not waiting on an event to fire.

// So if you're accessing DOM elements with a script tag in the header WITHOUT 'defer', you'll get an error cos DOM elements ain't loaded. 

// 'Defer' is a new tag added to the HTML within the <script> tag. 
document.querySelector('h1').textContent = 'Hello Daddy!';
// this now works without waiting for shit to load
// defer will defer JS code from running until DOM is loaded

//
// ====== Events we can use in Window ======
//
// ------ Resize ------
window.addEventListener('resize', () => {
    document.querySelector('h1').textContent = `Resized to: ${window.innerWidth} by ${window.innerHeight}`;
});
// ------ Scroll ------
// listens for scroll event
window.addEventListener('scroll', () => {
    console.log(`Scrolled: horizontal${window.scrollX}, vertical${window.scrollY}`);

    // if (window.scrollY > 300) {
    //     document.body.style.backgroundColor = 'black';
    //     document.body.style.color = 'white';
    // } else {
    //     document.body.style.backgroundColor = 'white';
    //     document.body.style.color = 'black';
    // }

    if (window.scrollY >= 800) { // purple
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else if (window.scrollY >= 600) { // blue
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'white';
    } else if (window.scrollY >= 400) { // yellow
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'black';
    } else if (window.scrollY >= 200) { // red
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

// ------ Focus & Blur ------
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue';
    });
});

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
    });
});