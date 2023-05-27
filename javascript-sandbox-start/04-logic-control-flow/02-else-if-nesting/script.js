// used when you wanna test multiple conditions

// const date = new Date(10, 30, 2022, 8, 0, 0);
const date = new Date(10, 30, 2022, 13, 0, 0);
const hour = date.getHours();

console.log(hour);

// ------ basic if statement ------
if (hour < 12) {
    console.log('Good morning!');
} else {
    console.log('Good night!');
}

// ------ if-else-if ------
if (hour < 12) {
    console.log('Good morning!');
} else if (hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good night!');
}

// ------ nested if ------
if (hour < 12) {
    console.log('Good morning!');
    
    if (hour === 6) {
        console.log('Wake up!');
    }
} else if (hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good night!');
    
    if (hour === 20) {
        console.log('Zzz!');
    }
}

// deeply nested if's, you may wanna think about switching to a switch statement

// ------ multiple conditions in single if statement ------
if (hour >= 7 && hour <= 15) {
    console.log('It is work time. Fuck!');
} 

if (hour === 6 || hour === 20) {
    console.log('Brush yo stanky ass teeth');
}
