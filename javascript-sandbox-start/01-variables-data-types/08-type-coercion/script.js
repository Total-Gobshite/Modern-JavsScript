// type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6)

// 1. String concatenation
let one = 5 + '5';
console.log(one, typeof one); // 55 string

let two = 5 * '5';
console.log(two, typeof two); // 25 number

let three = 5 + null; // null is converted to 0
console.log(three, typeof three); // 5 number

let valueOfTrue = Number(true); // true is converted to 1
console.log(valueOfTrue, typeof valueOfTrue); // 1 number
let valueOfFalse = Number(false); // false is converted to 0
console.log(valueOfFalse, typeof valueOfFalse); // 0 number

let valueOfNull = Number(null); // null is converted to 0
console.log(valueOfNull, typeof valueOfNull); // 0 number
let valueOfUndefined = Number(undefined); // undefined is converted to NaN
console.log(valueOfUndefined, typeof valueOfUndefined); // NaN number

let four = 5 + true; // true is converted to 1
console.log(four, typeof four); // 6 number

let five = 5 + undefined; // undefined is converted to NaN
console.log(five, typeof five); // NaN number