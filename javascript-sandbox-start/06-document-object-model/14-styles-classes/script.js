const text = document.querySelector('p');
const listParentTag = document.querySelector('.item-list');
const arrayOfItems = document.querySelectorAll('.item-list li');

function run() {
    // ------ className ------
    // console.log(text.className); // card
    
    // text.className += ' dark'; // adds dark class to the selected element -- if used just assignment instead of += it would overwrite all existing classes
    
    // console.log(text.className); // card dark
    
    // text.classList.remove('dark');

    // ------ classList ------
    // All methods of classList
            // add -- adds class to element
            // remove -- removes class from element
            // toggle -- adds class if it doesn't exist, removes it if it does
            // contains -- checks if class exists on element
            // replace -- replaces one class with another
            // item -- returns class at specified index
    
        // ------ DOM Token List -----
        // console.log(listParentTag.classList); // DOMTokenList(1) ["item-list", value: "item-list"]
        // // can use high-order-array-methods on DOMTokenList (returned by classList)
        
        // listParentTag.classList.forEach((item) => console.log(item)); 

        
        // ------ add - adds class to element ------
        // console.log(text.classList); // DOMTokenList(1) ["text", value: "text"]
    
        // text.classList.add('dark'); // adds class without replacing existing classes --  if class already exists it won't be added again
    
        // console.log(text.classList); // DOMTokenList(2) ["text", "dark", value: "text dark"]
    
        // ------ item - returns class at specified index ------
        // console.log(text.classList.item(1)); // dark

        // ------ toggle - adds class if it doesn't exist, removes it if it does ------
        // text.classList.toggle('dark') // like light/dark switcher -- if class exists it'll be removed, if it doesn't exist it'll be added -- will need to comment out above code to see in action
        
        // text.classList.toggle('hidden'); // toggles to hide/show

        // ------ replace - replaces one class with another ------
        // text.classList.replace('card', 'dark');
    
    // ------ style ------
    // listParentTag.style.lineHeight = '2'; // adds CSS styling

    arrayOfItems.forEach((item, index) => {
        item.style.color = 'red';

        if (index === 3) {
            item.style.color = 'blue';
        }
    });

}

document.querySelector('button').onclick = run; // no parenthesis around run so that it's only called by onClick -- if you add run() it'll be called as the program executes