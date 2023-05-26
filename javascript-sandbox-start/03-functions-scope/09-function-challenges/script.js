// ---------------- CHALLENGE 1 ----------------
function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * 1.8;
}

const getCelsius2 = (fahrenheit) => (fahrenheit - 32) * 1.8; // arrow function

console.log(getCelsius(32)); // 0
console.log(getCelsius2(32)); // 0

// ---------------- CHALLENGE 2 ----------------
function minMax(arrayOfNumbers) {
    return [Math.min(...arrayOfNumbers), Math.max(...arrayOfNumbers)];
}
console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]

// ---------------- CHALLENGE 3 ----------------
(function (length, width) {
    console.log(`// On page load
    The area of a rectangle with length of ${length} and width of ${width} is ${length * width}`);
})(10, 5);