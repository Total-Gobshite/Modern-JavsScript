// ------ Old Code ------
// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

// const button = document.createElement('button');
// button.className = 'remove-item btn-link text-red';

// const icon = document.createElement('i');
// icon.className = 'fa-solid fa-xmark';

// button.appendChild(icon);
//   li.appendChild(button);

//   document.querySelector('.items').appendChild(li);
// }

// createNewItem('Cheese');

// ------ Clean Code ------
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function createListItem(item) {
  const li = document.createElement('li'); // create list element
  li.appendChild(document.createTextNode(item)); // create text and add to list

  const button = createButton('remove-item btn-link text-red'); // create button and icon
  li.appendChild(button); // add to list

  document.querySelector('.items').appendChild(li); // add list to ul with .items class
}

createListItem('Eggs');

// <li>
//   Orange Juice
//   <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>
// </li>
