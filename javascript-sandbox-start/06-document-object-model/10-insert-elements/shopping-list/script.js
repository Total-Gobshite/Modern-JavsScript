// insertAdjacentElement Example
function insertElement() {
  // 1. where do you want to insert? Need reference element
  const filter = document.querySelector('.filter');

  // 2. create new element
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  // 3. insert new element
  filter.insertAdjacentElement('beforebegin', h1); // position, element
  // types of positions: beforebegin, afterbegin, beforeend, afterend
}
insertElement();

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');
  
  item.insertAdjacentText('afterend', 'insertAdjacentText');
}
insertText();

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h1>insertAdjacentHTML</h1>'); // takes string with HTML
}
insertHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul'); // this is the parent of the list items

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');
  ul.insertBefore(li, thirdItem); // parameters: element to insert, element to insert before
  // insertBefore is a method on the parent element!!
}
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
