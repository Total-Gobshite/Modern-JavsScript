const fruits = ['🍏', '🍊', '🍌', '🍉', '🍍', '🍑', '🥭', '🍈', '🍎', '🍐', '🍋', '🥝', '🥥'];
const berries = ['🍓', '🍒', '🍇'];
console.log(`fruits: ${fruits}`);
console.log(`berries: ${berries}`);

// 1. Push -- add to the end of an array
fruits.push(berries); // berries is added into fruits as an array, not as seperate elements, this is a nested array
console.log(fruits);

// 2. Accessing elements in a nested array
console.log(fruits[13]); // accessing berries array
console.log(fruits[13][1]); // accessing the second element in the nested array
fruits.splice(13, 1); // remove the berries array from fruits

// 3. Nest both arrays into a new array
const fruitsAndBerries = [fruits, berries];
console.log(fruitsAndBerries); // array of two items, both items are arrays

// 4. Concat -- taking the items from one array and adding them to another array -- no nesting
const fruitsAndBerriesConcat = fruits.concat(berries);
console.log(fruitsAndBerriesConcat);

// 5. Spread -- takes the items, not the array/object itself -- can be used for arrays and objects.
let spreadOperator = [...fruits, ...berries];
console.log(spreadOperator);

spreadOperator = [...fruits, berries];
console.log(spreadOperator);

// 6. Flatten arrays -- take a nested array and flatten it into a single array
const nestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(nestedArray);
let flattenedArray = nestedArray.flat();
console.log(flattenedArray);
flattenedArray = nestedArray.flat(2); // flatten the array by 2 levels
console.log(flattenedArray);

// STATIC METHODS ON ARRAY OBJECT
// Array.isArray() -- checks if an object is an array
console.log(Array.isArray(fruits));

// Array.from() -- creates a new array from an array-like object -- useful for JSON data
const arrayLikeObject = {
    0: '🍏',
    1: '🍊',
    2: '🍌',
    3: '🍉',
    4: '🍍',
    5: '🍑',
    6: '🥭',
    7: '🍈',
    8: '🍎',
    9: '🍐',
    10: '🍋',
    11: '🥝',
    12: '🥥',
    length: 13,
};
console.log(arrayLikeObject);
const arrayFromObject = Array.from(arrayLikeObject);
console.log(arrayFromObject);

// Array.of() -- creates a new array from the arguments passed in
const arrayOf = Array.of('🍏', '🍊', '🍌', '🍉', '🍍', '🍑', '🥭', '🍈', '🍎', '🍐', '🍋', '🥝', '🥥');
console.log(arrayOf);

// Array.fill() -- fills an array with a static value
const arrayToFill = [1, 2, 3, 4, 5];
console.log(arrayToFill);
arrayToFill.fill(0);
console.log(arrayToFill);

