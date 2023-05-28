// HIGH ORDER ARRAY METHOD: map()
// 1. They take in function as argument (callback function)
// 2. map() returns a new array
// 3. map() loops through the array and runs the callback function on each item in the array
// 4. map() returns a new array with the results of the callback function
// 5. map() does not change the original array
// 6. map() can take in 3 arguments: item, index, array
// 7. map() can be chained with other array methods
//
// MDN DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ------ DOUBLING NUMBERS ------
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// arrow function syntax
const doubledNumbers2 = numbers.map(number => number * 2);
console.log(doubledNumbers2); // [2, 4, 6, 8, 10]

// forEach
const doubleNumbers2 = [];
numbers.forEach(number => doubleNumbers2.push(number * 2));
console.log(doubleNumbers2); // [2, 4, 6, 8, 10]

// ------ MAP AN ARRAY OF COMPANY OBJECTS ------
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];
console.log(companies);

// get all company names
const companyNames = companies.map(company => company.name);
console.log(companyNames); // ["Company One", "Company Two", "Company Three", "Company Four", "Company Five", "Company Six", "Company Seven", "Company Eight", "Company Nine"]

// get all company names and category
const companyNamesAndCategories = companies.map(company => {
    return {
        name: company.name,
        category: company.category
    };
});
console.log(companyNamesAndCategories);

// concise body syntax
const companyNamesAndCategories2 = companies.map(company => ({
    name: company.name,
    category: company.category
}));
console.log(companyNamesAndCategories2);
// If the function body consists of a single expression, you can omit the return keyword and the curly braces {}. This is known as a "concise body" arrow function.
// If you're returning an object literal in a concise body arrow function, you need to wrap the object literal in parentheses (). This is because without the parentheses, JavaScript would interpret the curly braces as the start and end of a function block, rather than an object literal.

// get length of each company in years
const companyLengths = companies.map(company => ({ name: company.name, yearsOfService: company.end - company.start + ' years' }));
console.log(companyLengths);

// ------ CHAIN MAP METHODS ------
// store square numbers in numbers2 array
const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2); // whatever is returned from the map() before it is passed into it
console.log(squareAndDouble); // [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]

// long version
const squareAndDouble2 = numbers
    .map(function (number) {
        return Math.sqrt(number); // this return
    })
    .map(function (sqrt) { // is passed into this function
        return sqrt * 2;
    });

console.log(squareAndDouble2); // [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]

// another example chaining map() with filter() to double all even numbers
const evenNumbers = numbers
    .filter(number => number % 2 === 0) // filter out odd numbers
    .map(number => number * 2); // double even numbers
console.log(evenNumbers); // [4, 8]

// another example
// Suppose we have an array of product objects, and we want to apply a 10% discount to all products with a price greater than $50. Then we want to get an array of just the product names.
const products = [
    { name: 'Product One', price: 80 },
    { name: 'Product Two', price: 45 },
    { name: 'Product Three', price: 60 },
    { name: 'Product Four', price: 30 },
    { name: 'Product Five', price: 75 }
];

const discountedProductNames = products
    .filter(product => product.price > 50) // filter out products with price > 50
    .map(product => ({ name: product.name, price: product.price * 0.9 })) // apply 10% discount
    .map(product => product.name); // get product names

console.log(discountedProductNames);

// another example
// Suppose you have a list of employees, and you want to find the average age of employees who live in a particular city, say 'San Francisco'. 
const employees = [
  { name: 'John Doe', age: 23, city: 'San Francisco' },
  { name: 'Jane Doe', age: 26, city: 'San Francisco' },
  { name: 'Mary Johnson', age: 31, city: 'New York' },
  { name: 'James Brown', age: 42, city: 'Chicago' },
  { name: 'Patricia Davis', age: 34, city: 'San Francisco' },
  { name: 'Robert Martinez', age: 27, city: 'San Francisco' },
  { name: 'Linda Taylor', age: 30, city: 'New York' },
  { name: 'Michael Garcia', age: 37, city: 'Chicago' },
  { name: 'Elizabeth White', age: 29, city: 'San Francisco' }
];

const averageAgeInSF = employees
  .filter(employee => employee.city === 'San Francisco')
  .map(employee => employee.age)
  .reduce((sum, age, _, { length }) => sum + age / length, 0);

console.log(averageAgeInSF);

// .filter() to filter the employees by city
    // reduce() method uses a callback function to reduce an array.
    // Callback arguments: accumulator (sum), currentValue (age), currentIndex, and array.
    // _ is an unused parameter, { length } gets the array's length.
    // Callback adds current age (divided by total elements) to sum.
    // 0 is the initial value of the accumulator.
// The method computes the average age.
// .map() to extract their ages
// .reduce() to calculate the sum and then compute the average.