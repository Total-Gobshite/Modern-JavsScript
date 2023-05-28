// HIGH ORDER ARRAY METHOD: reduce()
// Reduces array down to single value
// 1. They take in function as argument (callback function)
// 2. reduce() returns a single value
// 3. reduce() loops through the array and runs the callback function on each item in the array
// 4. reduce() returns a single value (number, string, object, array)
// 5. reduce() does not change the original array
// 6. reduce() can take in 4 arguments: accumulator, currentValue, index, array
// 7. reduce() can be chained with other array methods
//
// MDN DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ------ SIMPLE EXAMPLE ------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
console.log(sum); // 55

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 55

const sum3_InitialValue = numbers.reduce((acc, cur) => acc + cur, 10); // initial value set to 10
console.log(sum3_InitialValue); // 65

// using for loop
const sum4 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}
console.log(sum4()); // 55

// ------ SHOPPING CART EXAMPLE ------
const shoppingCart = [
    { product: 'phone', price: 700 },
    { product: 'Screen Protector', price: 9.01 },
    { product: 'Memory Card', price: 20.99 }
];
console.log(shoppingCart);

// get total price of shopping cart
const totalPrice = shoppingCart.reduce((acc, product) => acc += product.price, 0);
console.log(totalPrice); // 730