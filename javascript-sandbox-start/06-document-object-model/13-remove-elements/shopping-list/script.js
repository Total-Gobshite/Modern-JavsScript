// ------ Remove ------
// called on element you want to remove
function removeClearButton() {
    document.querySelector('#clear').remove();
}
removeClearButton();

// ------ Remove Child ------
// called on the parent of the element and you pass in the element you want to remove
function removeFirstItem() {
    const parent = document.querySelector('#item-list');
    const removeItem = document.querySelector('li:first-child');

    parent.removeChild(removeItem);
}
removeFirstItem();

// ------ Create Remove Item ------
/**
 * user passs in index of list item to remove
 * @param {number} itemNumber 
 */
function removeItem(itemNumber) {
    const listArray = document.querySelectorAll('.items li');
    listArray[itemNumber - 1].remove();
}
removeItem(2); // remove second item