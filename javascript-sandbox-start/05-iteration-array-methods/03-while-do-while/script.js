// these along of for loops are old school now we have higher order array methods -- forEach, forIn, forOf

// ------ While Loop ------
// while (condition) {
//   // code block to be executed
// }

let i = 0;
while (i <= 20) {
    console.log(i);
    i++; // never forget to increment the counter!
}

// Use a for loop when you know the number of times you want the loop to run.
// Use a while loop when the number of times you want to loop is unknown -- BUT MAKE SURE IT IS NOT INFINITE!

// looping over arrays
const colours = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];

i = 0; // reset counter as we're reusing it
while (i < colours.length) {
    console.log(colours[i]);
    i++; // IMPORTANT!
}

// ------ Nesting While Loops ------
i = 0; // reset counter
while (i <= 5) {
    console.log(`Outer loop: ${i}`);
    i++;

    let j = 0; // 2nd loop counter
    while (j < 3) {
        console.log(`Inner loop: ${j}`);
        j++;
    }
}

// ------ Do While Loop ------
// will always run at least once even if the condition is false
// do {
//   // code block to be executed
// }
// while (condition);

i = 0; // reset counter
do {
    console.log(i);
    i++; // IMPORTANT!
} while (i < 5);

i = 50; // reset counter
do {
    console.log(i); // this will run once
    i++; // IMPORTANT!
} while (i < 5); // hits this, is false, then stops
// so runs once, then stops