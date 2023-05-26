console.log(`---------------- CHALLENGE ONE ----------------`);

const originalArray = [1, 2, 3, 4, 5];
console.log(`originalArray: ${originalArray}`);

// 2 approaches, spread operator and slice method
const modifiedArray = [...originalArray]; // copy original array's values over
const modifiedArray2 = originalArray.slice(); // copy original array's values over

modifiedArray.push(6); // add value to end
modifiedArray2.push(6); // add value to end

modifiedArray.unshift(0); // add value to beginning
modifiedArray2.unshift(0); // add value to beginning

console.log(`\n... copying original array & adding 0 and 6 ...`);
console.log(`originalArray: ${originalArray}`);
console.log(`modifiedArray: ${modifiedArray}`);
console.log(`modifiedArray2: ${modifiedArray2}`);

console.log(`\n... sorting by highest to lowest ...`);
console.log(modifiedArray.reverse());
console.log(modifiedArray2.reverse());

console.log(``);
console.log(`---------------- CHALLENGE TWO ----------------`);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);

const arr3 = arr1.concat(arr2);
console.log(`arr3: ${arr3}`);

arr3.splice(4, 1); // remove duplicate 5
console.log(`arr3: ${arr3}`);

// ---------------- FAILED APPROACHES ----------------

// 1. Assigning original array to modified array copied the reference, not the values
// const originalArray = [1, 2, 3, 4, 5];
// console.log(`originalArray: ${originalArray}`);

// const modifiedArray = originalArray; // copy original array's values over
// modifiedArray.push(0, 6); // add new values

// console.log(`originalArray: ${originalArray}`);
// console.log(`modifiedArray: ${modifiedArray}`);