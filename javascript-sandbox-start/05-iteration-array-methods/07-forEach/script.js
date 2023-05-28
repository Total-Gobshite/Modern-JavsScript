// HIGH ORDER ARRAY METHOD: forEach()
// 1. They take in function as argument (callback function)
// 2. forEach() simply loops through, it does not return anything

const socialNetworks = ['youtube', 'facebook', 'twitter', 'instagram', 'tiktok', 'linkedin'];

// console.log(socialNetworks.__proto__); // can see all methods & properties on any object
// console.dir(socialNetworks); // another way of seeing all methods & properties on any object
console.log(Object.getPrototypeOf(socialNetworks)); // Use this instead of __proto__ to see all methods & properties on any object

// ------ PASSING IN NORMAL FUNCTION SYNTAX ------
console.log('------ PASSING IN NORMAL FUNCTION SYNTAX ------');
socialNetworks.forEach(function (thisRepresentsEachItemInTheArray) { // function runs on every item in array
    console.log(thisRepresentsEachItemInTheArray);
});

// ------ PASSING IN ARROW FUNCTION SYNTAX ------
console.log('------ PASSING IN ARROW FUNCTION SYNTAX ------');
socialNetworks.forEach((thisRepresentsEachItemInTheArray) => console.log(thisRepresentsEachItemInTheArray));

// ------ PASSING IN ARROW FUNCTION SYNTAX WITH MULTIPLE PARAMETERS ------
console.log('------ PASSING IN ARROW FUNCTION SYNTAX WITH MULTIPLE PARAMETERS ------');
// callbackFn: A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
    // element: The current element being processed in the array.
    // index: The index of the current element being processed in the array.
    // array: The array forEach() was called upon.

socialNetworks.forEach((thisRepresentsEachItemInTheArray, index, array) => console.log(index, thisRepresentsEachItemInTheArray, array));

// MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// ------ PASSING IN A NAMED FUNCTION (RATHER THAN ANONYMOUS FUNCTIONS ABOVE) ------
console.log('------ PASSING IN A NAMED FUNCTION (RATHER THAN ANONYMOUS FUNCTIONS ABOVE) ------');

function print(thisRepresentsEachItemInTheArray) {
    console.log(thisRepresentsEachItemInTheArray);
}
socialNetworks.forEach(print); // youtube facebook twitter instagram tiktok linkedin

function printNoParams() { // gets called for each item (prints 6 times) but has no access to the item cos it doesn't take it in as a parameter
    console.log('Printed');
}
socialNetworks.forEach(printNoParams); // Printed Printed Printed Printed Printed Printed

// ------ USING FOREACH ON AN ARRAY OF OBJECTS ------
console.log('------ USING FOREACH ON AN ARRAY OF OBJECTS ------');

const socialNetworksObjects = [
    { name: 'youtube', link: 'https://youtube.com' },
    { name: 'facebook', link: 'https://facebook.com' },
    { name: 'twitter', link: 'https://twitter.com' },
    { name: 'instagram', link: 'https://instagram.com' },
    { name: 'tiktok', link: 'https://tiktok.com' },
    { name: 'linkedin', link: 'https://linkedin.com' },
];

// socialNetworksObjects.forEach(function (object) {
//     console.log(object);
// });

// this will print out each object in the array
socialNetworksObjects.forEach((object) => console.log(object));

// this will print out the name and link property for each in the array
socialNetworksObjects.forEach((object) => console.log(object.name, '->', object.link));