console.log(10 > 20 && 30 > 15); // false && true -> false
console.log(10 > 20 || 30 > 15); // false || true -> true
// check out the truth table for more information: https://en.wikipedia.org/wiki/Truth_table

// list of all logical operators
// ! -> not
// && -> and
// || -> or

// ------ && - returns first falsy vale or last (truthy) value ------
console.log(10 && 20); // 20
console.log(0 && 20); // 0
console.log(10 && 20 && 30); // 30
console.log(10 && '' && 20 && 30); // ''

// real world example
console.log('------ real world example ------');
const posts = ['post one', 'post two']; // array of posts
// we're getting posts from an API and we want to show the posts on the page
posts.length > 0 && console.log(posts[0]); // if posts array is not empty, log the first post, otherwise do nothing because an empty array outputs 'undefined'

posts.splice(0); // remove all posts from the array
posts.length > 0 && console.log(posts[0]); // returns first falsy value, which is 0, so it doesn't log anything

// ------ || - returns first truthy value or last value ------
console.log(10 || 20); // 10
console.log(0 || 20); // 20
console.log(0 || null || '' || undefined); // undefined

// ------ ?? - nullish coalescing operator ------
// returns the right side operand when the left is null or undefined
console.log(null ?? 'hello'); // hello
console.log(undefined ?? 'hello'); // hello
console.log(10 ?? 20); // 10
console.log('' ?? 'hello'); // ''
console.log(null ?? undefined); // undefined
