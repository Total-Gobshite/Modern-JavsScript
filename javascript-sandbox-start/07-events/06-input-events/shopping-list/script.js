// ====== How to get values from input fields ======
const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox');
const heading = document.querySelector('h1');

// ------ function declarations ------
function onInput(e) {
    console.log(e.target.value); // returns the value of the input field
};

function onChecked(e) {
    console.log(e.target.checked); // returns true if checked, false if not
    console.log(e.target.value); // does not work well for checkboxes
}

function onFocus(e) {
    // useful for adding borders around input fields when they're in focus
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineColor = 'blue';
    itemInput.style.outlineWidth = '2px';
}

function onBlur(e) {
    // useful for removing borders around input fields when they're not in focus
    console.log('Input is blurred (not in focus)');
    itemInput.style.outlineStyle = 'none';
}

// ------ text input ------
// itemInput.addEventListener('keydown', onInput); // keydown works but input is better for inputs, it works for all types of inputs. keydown doesn't work for checkboxes.
itemInput.addEventListener('input', onInput);

// ------ radio buttons ------
priorityInput.addEventListener('input', onInput); // fires when input changes, logs whatever value of the item selected in checkbox (the value attribute in HTML)
// priorityInput.addEventListener('change', onInput); // same as input but only works for checkboxes, radio buttons, and select options. again, input is versatile.

// ------ checkboxes ------
checkboxInput.addEventListener('input', onChecked);

// ------ focus and blur ------
// focus - fires when you click on an input field
// blur - fires when you click out of an input field
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
