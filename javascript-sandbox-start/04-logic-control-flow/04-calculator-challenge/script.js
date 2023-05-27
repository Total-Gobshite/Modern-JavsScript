const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return `${num1} ${operator} ${num2} = ${num1 + num2}`;
            break;
        case '-':
            return `${num1} ${operator} ${num2} = ${num1 - num2}`;
            break;
        case '*':
            return `${num1} ${operator} ${num2} = ${num1 * num2}`;
            break;
        case '/':
            return `${num1} ${operator} ${num2} = ${num1 / num2}`;
            break;
        default:
            return `Mate, what the fuck is '${operator}'. That ain't right.`;
    };
};

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));