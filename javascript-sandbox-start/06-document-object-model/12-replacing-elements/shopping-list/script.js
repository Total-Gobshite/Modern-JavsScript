// ------ Replace First Item ------
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}
replaceFirstItem();

// ------ Replace Second Item ------
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    // we use outerHTML which includes not only what's inside the element but also the element tags, in this case the <li> tags
    secondItem.outerHTML = '<li>Replaced Second</li>';

}
replaceSecondItem();

// ------ Replace All Items ------
function replaceAllItems() {
    const listItems = document.querySelectorAll('.items li'); // targets li elements whose parent has the class of .items
    
    // --- replacing all items with `All: Replaced Item ${index + 1}` ---
    // listItems.forEach((item, index) => item.outerHTML = `<li>All: Replaced Item ${index + 1}</li>`);
    // listItems.forEach((item, index) => item.innerHTML = `All: Replaced Item ${index + 1}`); // does same thing -- tags not included cos you're not replacing the tags like outerHTML, only what's inside the existing <li> tags

    // --- replacing all items except last/fourth ---
    listItems.forEach((item, index) => {
        // if (index === 3) {
        //     continue; // continue is not allowed in array methods
        // }

        if (index !== 3) {
            item.outerHTML = `<li>All: Replaced Item ${index + 1}</li>`;
        }
    });
}
replaceAllItems();

// ------ Replace Child ------
// targets the parent element

// replacing the <h1>Shopping List</h1> with <h2>Shopping List</h2>
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = h1.innerText;

    header.replaceChild(h2, h1); // parameters: new element, element to replace
}
replaceChildHeading();