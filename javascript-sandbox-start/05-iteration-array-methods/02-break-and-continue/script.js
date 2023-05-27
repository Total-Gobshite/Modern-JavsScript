// ------ Break ------
// allows you to break out of a loop

for (let i = 0; i <= 20; i++) {
    if (i === 15) break;
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... 14
}

// ------ Continue ------
// skip the rest of the current iteration and continue to the next one
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Thirteen is bad luck! Skipping...');
        continue;
    }
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... 14
}

for (let i = 0; i <= 20; i++) {
    if (i === 13) continue; // this works too but the continue statement must be before any commas so you cannot log 'Thirteen is bad luck! Skipping...' before the continue statement. 
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... 14
}