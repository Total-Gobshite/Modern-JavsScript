// ||= assigns/actions the right side value only if the left is a falsy value.
// &&= assigns/actions the right side value only if the left is a truthy value.
// ??= assigns/actions the right side value only if the left is a null or undefined.


// ------------------------------------------------------------------
// ||= assigns/actions the right side value only if the left is a falsy value.
console.log('------ ||= assigns the right side value only if the left is a falsy value. ------');
let a = false; // falsy value

if (!a) { // if a is falsy because remember this if only runs if the condition is true
    a = 10;
}
console.log(a); // 10

a = false; // falsy value
a = a || 30; // if left-side is falsy, assign right-side value to a
console.log(a); // 10

a = false;
a ||= 69; // if left-side is falsy, assign right-side value to a
console.log(a); // 69


// ------------------------------------------------------------------
// &&= assigns/actions the right side value only if the left is a truthy value.
console.log('------ &&= assigns the right side value only if the left is a truthy value. ------');
let b = 10; // truthy value

if (b) { // if b is truthy because remember this if only runs if the condition is true
    b = 20;
}
console.log(b); // 20

b = 10; // truthy value
b = b && 30; // if left-side is truthy, assign right-side value to b
console.log(b); // 30

b = 10; // truthy value
b &&= 69; // if left-side is truthy, assign right-side value to b
console.log(b); // 69


// ------------------------------------------------------------------
// ??= assigns/actions the right side value only if the left is a null or undefined.
console.log('------ ??= assigns the right side value only if the left is a null or undefined. ------');
let c = null; // null value

if (c === null || c === undefined) { // if c is null or undefined because remember this if only runs if the condition is true
    c = 20;
}
console.log(c); // 20

c = null; // null value
c = c ?? 30; // if left-side is null or undefined, assign right-side value to c
console.log(c); // 30

c = null; // null value
c ??= 69; // if left-side is null or undefined, assign right-side value to c
console.log(c); // 69

c = NaN;
c ??= 729; // if left-side is null or undefined, assign right-side value to c
console.log(c); // NaN