function insertAfter(newEl, existingEl) {
    // if (existingEl.nextElementSibling !== null) { // if there is a next sibling element, add before it
    //     existingEl.parentElement.insertBefore(newEl, existingEl.nextElementSibling);
    // } else { // otherwise add to the end by targeting the parent element
    //     existingEl.parentElement.appendChild(newEl);
    // }
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
    // huh, turns out we don't need to handle if the next sibling is null, if it doesn't exist, it just adds it to the end
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:last-child');

insertAfter(li, firstItem);