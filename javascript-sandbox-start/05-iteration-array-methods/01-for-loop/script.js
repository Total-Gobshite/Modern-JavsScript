// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// ------ BASIC LOOP ------
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// ------ NESTED LOOPS ------
for (let i = 1; i <= 10; i++) {
    console.log('Outer loop:', i);
    for (let j = 1; j <= 10; j++) {
        console.log('Inner loop:', j);
    }
}

// ------ LOOPING THROUGH ARRAYS ------
const animals = ['lion', 'tiger', 'bear', 'monkey', 'elephant', 'giraffe'];
console.log(`There are ${animals.length} animals in the array.`);

for (let i = 0; i < animals.length; i++) { // goes through entire array
    console.log(i, animals[i] === 'monkey' ? `${animals[i]} are top-tier` : animals[i]);
}

// these along of for loops are old school now we have higher order array methods -- forEach, forIn, forOf

// Use a for loop when you know the number of times you want the loop to run.
// Use a while loop when the number of times you want to loop is unknown -- BUT MAKE SURE IT IS NOT INFINITE!