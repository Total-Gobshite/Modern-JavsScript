let output;
const arr = [3, 7, 11, 15, 19, 23, 27, 31];
console.log(arr); // view methods you can use

//
// Modify Array
//

// 1. Use the push method to add onto the end of array
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31
arr.push(35);
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31, 35

// 2. Use the pop method to remove the last item from the array
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31, 35
arr.pop();
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31

// 3. Use the unshift method to add onto the beginning of the array
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31
arr.unshift(1);
console.log(arr); // 1, 3, 7, 11, 15, 19, 23, 27, 31

// 4. Use the shift method to remove the first item from the array
console.log(arr); // 1, 3, 7, 11, 15, 19, 23, 27, 31
arr.shift();
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31

// 5. Use the reverse method to reverse the array
console.log(arr); // 3, 7, 11, 15, 19, 23, 27, 31
arr.reverse();
console.log(arr); // 31, 27, 23, 19, 15, 11, 7, 3

//
// Get from Array
//

// 1. Use the includes method to check if the array includes a value
console.log(arr); // 31, 27, 23, 19, 15, 11, 7, 3
output = arr.includes(11);
console.log(output); // true

// 2. Use the indexOf method to get the index of a value
output = arr.indexOf(11);
console.log(output); // 5

output = arr.indexOf(99); // -1 if not found
console.log(output); // -1

// 3. Use the slice method to get a portion of the array -- doesn't change initial array
output = arr.slice(2, 5); // start at index 2, end at index 5 (not inclusive)
console.log(output); // 23, 19, 15
console.log(`initial array: ${arr}`); // 31, 27, 23, 19, 15, 11, 7, 3

// 4. Use the splice method to remove a portion of the array -- changes initial array
output = arr.splice(2, 5); // start at index 2, remove 5 items
console.log(output); // 23, 19, 15, 11, 7
console.log(`initial array: ${arr}`); // 31, 27, 3

