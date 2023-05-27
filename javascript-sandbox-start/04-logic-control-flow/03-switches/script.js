// another way to evaluate expressions and values

const date = new Date(2022, 1, 10, 8, 0, 0);
const month = date.getMonth();
hour = date.getHours();
console.log(month);

// ------ switch statement ------
switch (month) { // create different cases based on value of month
    case 1:
        console.log('it is january');
        break; // breaks out of switch
    case 2:
        console.log('it is febuary');
        break;
    case 3:
        console.log('it is march');
        break
    default: //if it doesn't match any case
        console.log('it is not jan, feb, mar');
}

// ------ switches can be used for ranges ------
switch (true) {
    case hour < 12:
        console.log('morning bitch');
        break;
    case hour < 18:
        console.log('afternoon bitch');
        break;
    default:
        console.log('goodnight, finally');
}