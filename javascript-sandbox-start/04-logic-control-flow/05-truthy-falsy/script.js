// Anything that is not 'falsy' will be 'truthy'.

const email = 'test@knobcheese.com';

if (email) { // email is cooerced (converted) into a boolean
    console.log('Email is truthy');
} else {
    console.log('Email is falsy');
}

console.log(Boolean(email)); 
console.log(Boolean(''));
console.log(typeof (''));
// a string that isn't empty will be truthy

// ------ FALSY VALUES: ------
// 1. false
// 2. 0
// 3. "" or '' (empty string)
// 4. null
// 5. undefined
// 6. NaN

// ------ TRUTHY VALUES: ------
// 1. Everything that is not falsy
// 2. true
// 3. '0' (0 as a string)
// 4. ' ' (space as a string)
// 5. 'false' (false as a string)
// 6. [] (empty array)
// 7. {} (empty object)
// 8. function(){} (empty function)

// ------ TRUTHY AND FALSY CAVEATS: ------
// example 1
console.log('------ example 1 ------');
const children = 0;

if (children) {
    console.log(`you have ${children} children`);
} else {
    console.log('please enter number of children');
}

// problem: they have entered 0 but it's not recognising the value, so is asking again
// solution: change the condition to check if children is not undefined

if (children !== undefined) {
    console.log(`you have ${children} children`);
} else {
    console.log('please enter number of children');
}

// example 2 -- checking for empty arrays
console.log('------ example 2 ------');
// const blogPosts = ['Post One', 'Post Two', 'Post Three']; // 'list posts'
const blogPosts = []; // 'list posts'

if (blogPosts) {
    console.log('list posts');
} else {
    console.log('no posts');
}

// this is trying to check if there are any posts
// problem: an empty array is not falsy, so it will still list posts
// solution: check the length of the array -- this'll be 0 if empty

if (blogPosts.length) {
    console.log('list posts');
} else {
    console.log('no posts');
}

// example 3 -- checking for empty objects
console.log('------ example 3 ------');
// const user = {
//     name: 'Brad'
// }; // 'user exists'
const user = {}; // 'user exists'

if (user) {
    console.log('user exists');
} else {
    console.log('user does not exist');
}

// trying to check if object is empty
// problem: an empty object is not falsy, so it will still say user exists
// solution: use Object.keys() which will give us an array of keys, since that's an array, we can call length BUT we cannot call length on an object.

if (Object.keys(user).length) {
    console.log('user exists');
} else {
    console.log('user does not exist');
}

// example 4 -- Loose Equality (==)
console.log('------ example 4 ------');
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// be careful, that's why we use strict equality (===)
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false