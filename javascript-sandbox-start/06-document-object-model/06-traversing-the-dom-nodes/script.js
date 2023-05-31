let output;
// ------ Child Nodes ------
console.log('------ Child Nodes ------');
const parent = document.querySelector('.parent');
console.log(parent.childNodes); // node list
// whitespace is considered a node
// comment too

console.log(parent.childNodes[0]); // grabs text node (whitespace)
console.log(parent.childNodes[0].textContent); // grabs text node (whitespace)
console.log(parent.childNodes[0].nodeName); 
console.log(parent.childNodes[3].textContent); // grabs text node for first child-div
console.log(parent.childNodes[3].outerHTML); // <div class="child">Child 1</div>

parent.childNodes[3].innerText = 'Child One, Parent of None';
parent.childNodes[5].style.color = 'red';

// ------ First & Last Child ------
console.log('------ First & Last Child ------');
console.log(parent.firstChild); // #text (whitespace)
console.log(parent.lastChild); // #text (whitespace)
parent.lastChild.textContent = 'Be free'; // adds 'Be free' to the end of the parent div

// ------ Parent Nodes from Child ------
console.log('------ Parent Nodes from Child ------');
const child = document.querySelector('.child');
console.log(child.parentNode); // parent div
console.log(child.parentElement); // same thing as parentNode

child.parentNode.style.backgroundColor = 'lightblue';
child.parentNode.style.padding = '1rem';

// ------ Siblings ------
console.log('------ Siblings ------');
const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem); // grabs 'Child 2'
console.log(secondItem.previousSibling); // grabs #text (whitespace)
console.log(secondItem.nextSibling); // grabs #text (whitespace)
console.log(secondItem.previousElementSibling); // grabs 'Child 1'
console.log(secondItem.nextElementSibling); // grabs 'Child 3'

// element grabs next element -- child div
// node grabs next node -- whitespace
// node provides more options but is more verbose