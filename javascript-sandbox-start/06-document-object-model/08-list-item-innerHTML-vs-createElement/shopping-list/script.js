// ------ Quick & Dirty ------
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

    document.querySelector('.items').appendChild(li);
}

// ------ Clean & Performant ------
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item)); // Insert text into li
    
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon); // Insert icon into button
    li.appendChild(button); // Insert button into li
    document.querySelector('.items').appendChild(li); // Insert li into ul with class .items
}
    

createListItem('Eggs');
createNewItem('Dudu');