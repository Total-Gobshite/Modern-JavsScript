// HIGH ORDER ARRAY METHOD: filter()
// 1. They take in function as argument (callback function)
// 2. filter() returns a new array
// 3. filter() loops through the array and runs the callback function on each item in the array
// 4. If the callback function returns true, it includes that item in the new array
// 5. If the callback function returns false, it does not include that item in the new array
// 6. filter() does not change the original array
// 7. filter() can take in 3 arguments: item, index, array
// 8. filter() can be chained with other array methods

// MDN DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// ------ FILTER OUT ALL ODD NUMBERS ------

// regular function syntax
console.log('------ FILTER OUT ALL ODD NUMBERS ------');

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// arrow function syntax
const evenNumbers2 = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers2); // [2, 4, 6, 8, 10]

// filtering out all even numbers using forEach
const evenNumbers3 = [];
numbers.forEach((number) => number % 2 === 0 && evenNumbers3.push(number));
console.log(evenNumbers3); // [2, 4, 6, 8, 10]

// ------ FILTER AN ARRAY OF COMPANY OBJECTS ------
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

// get all company names
const companyNames = companies.filter(company => company.name);
console.log(companyNames); // gives all company objects, you can't get just the names using filter (that's map's job)

// get all retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// get companies started in the 80s and ended in or before 2005
const eightiesto2005Companies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
console.log(eightiesto2005Companies);

// get companies that lasted 10 years or more
const tenYearCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(tenYearCompanies);