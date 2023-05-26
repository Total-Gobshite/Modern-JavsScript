// Function scope
function first() {
    const x = 100;

    function second() {
        const y = 200;

        console.log(x + y);
    }
    second();

    // you can access parent variables but you can't access child variables
    // console.log(y); // ReferenceError: y is not defined

}
first();

// Block scope
if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }

    // you can access parent variables but you can't access child variables
    // console.log(y); // ReferenceError: y is not defined
}