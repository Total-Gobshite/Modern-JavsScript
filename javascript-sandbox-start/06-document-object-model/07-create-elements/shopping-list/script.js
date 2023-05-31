const div = document.createElement('div');
div.className = 'myElement';
div.id = 'myElement';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World'; // not the best, it's more for get and changing existing element than creating new ones
const text = document.createTextNode('Hello World');
div.appendChild(text); // inserts child into the element right at the very end

console.log(div.outerHTML); // doesn't create it, just shows it in the console

