// Default values
function registerUser (user = 'Guest') { // new approach for default values
    // old approach for default values
    // if (!user) {
    //     user = 'Guest';
    // }

    return user + ' is registered';
}

console.log(registerUser('John'));
console.log(registerUser()); // undefined is registered

// Rest Parameters
function sum(...numbers) { // the rest of the parameters
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user)); // The user John with the id of 1 is logged in
console.log(loginUser({id: 2, name: 'Sara'})); // The user Sara with the id of 2 is logged in

// Arrays as params
function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

