// select form to add submit event on
const form = document.getElementById('item-form');

// ---------- Adding item to list ----------
const removeIconCSSClasses = 'fa-solid fa-xmark';
const removeBtnCSSClasses = 'remove-item btn-link text-red';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createListItem(document.getElementById('item-input').value);
    document.getElementById('item-input').value = null; // clr input field
    // console.log(document.getElementById('item-input').__proto__);
});

/**
 * @param {string} cssClasses 
 * @returns creates the 'x' icon. does not wrap in button.
 */
function createRemoveIcon(cssClasses) {
    const icon = document.createElement('i'); // create i tag
    icon.className = cssClasses; // applies css classes
    return icon;
}

function createRemoveBtn(cssClasses) {
    const button = document.createElement('button');
    button.className = cssClasses;
    button.appendChild(createRemoveIcon(removeIconCSSClasses));
    return button;
}

function createListItem(itemValue) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(itemValue));
    li.appendChild(createRemoveBtn(removeBtnCSSClasses));
    document.querySelector('.items').appendChild(li);
    return li;
}

// form.appendChild(createRemoveBtn('remove-item btn-link text-red'));
// createListItem('Test');

// ---------- Removing item/s to list ----------
const clearAllBtn = document.getElementById('clear');

function clearListItems() {
    const arrayOfListItems = document.querySelectorAll('.items li');
    arrayOfListItems.forEach((i) => i.remove());
}

clearAllBtn.addEventListener('click', clearListItems);

/**
 * red highlight when mouse over remove section of items or when over clear all btn
 * I'm targeting those elements classes used in the HTML
 * pros: less code
 * cons: fires a lot of unecessary events because it's attached to body
 * (solution is to add specific events to the class or tagname)
 */
document.body.addEventListener('mouseover', (e) => {
    if (e.target?.classList?.contains('btn-clear')) {
        e.target.style.border = '1px solid red';
    } else if (e.target?.classList?.contains('fa-xmark')) {
        e.target.parentNode.parentNode.style.border = '1px solid red';
    } else if (e.target?.classList?.contains('remove-item')) {
        e.target.parentNode.style.border = '1px solid red';
    }
});

document.body.addEventListener('mouseout', (e) => {
    if (e.target?.classList?.contains('btn-clear')) {
        e.target.style.border = '1px solid #ccc';
    } else if (e.target?.classList?.contains('fa-xmark')) {
        e.target.parentNode.parentNode.style.border = '1px solid #ccc';
    } else if (e.target?.classList?.contains('remove-item')) {
        e.target.parentNode.style.border = '1px solid #ccc';
    }
});

const listParent = document.querySelector('ul');

listParent.addEventListener('click', (e) => {
    // adds single event listener to parent, then targets whatever we want
    // targets icon and button within UL
    if (e.target.tagName === 'I') {
        e.target.parentNode.parentNode.remove();
    } else if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.remove();
    }
});
