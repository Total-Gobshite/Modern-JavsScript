const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault(); // prevents the form from submitting to a file
    // otherwise when you submit, the page will refresh and you'll lose the data and the console.log won't show
    
    // get input value
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;
    
    // form validation
    if (item === '' || priority === '0') {
        console.warn('Please enter an item and select a priority, biatch');
        return;
    }
    
    console.log('Form submitted');
}

// form.addEventListener('submit', onSubmit);

// ------ form data object ------
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // another way of getting the values
    // const item = formData.get('item'); // 'item' is the name='' in HTML
    // const priority = formData.get('priority');

    // console.log(item, priority);

    // getting all the entries
    const entries = formData.entries(); // gives an iterator
    
    for (let entry of entries) { // can loop over iterator
        console.log(entry); // each entry being each input submitted in the form (ours is selecting the form with ID 'item-entry')
        // prints:
        // ['item', 'asda']
        // ['priority', '1']
    }
}

form.addEventListener('submit', onSubmit2);
