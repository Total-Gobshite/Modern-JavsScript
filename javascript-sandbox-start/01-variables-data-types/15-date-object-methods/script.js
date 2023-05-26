let output;

// 1. Create a new Date object
const date = new Date(); // todays date
console.log(date);

// 2. Get the month of the Date object and output it
output = date.getMonth();
console.log(output); // 0 = January, 1 = February, 2 = March, 3 = April, 4 = May, 5 = June, 6 = July, 7 = August, 8 = September, 9 = October, 10 = November, 11 = December

// 3. Get the full year of the Date object and output it
output = date.getFullYear();
console.log(output);

// 4. Get the day of the week of the Date object and output it
output = date.getDay();
console.log(output); // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday

// 5. Get the hours of the Date object and output it
output = date.getHours();
console.log(output);

// 6. Get the minutes of the Date object and output it
output = date.getMinutes();
console.log(output);

// 7. Get the seconds of the Date object and output it
output = date.getSeconds();
console.log(output);

// 8. Get the milliseconds of the Date object and output it
output = date.getMilliseconds();
console.log(output);

// 9. Get the day of the month of the Date object and output it
output = date.getDate();
console.log(output); // 1 - 31

// 10. Set the month of the Date object to 11
date.setMonth(11);
console.log(date);

// 11. Set the full year of the Date object to 2020
date.setFullYear(2020);
console.log(date);

// 12. Set the hours of the Date object to 12
date.setHours(12);
console.log(date);

//
// INTL DateTimeFormat
//

// 1. US date format
output = Intl.DateTimeFormat('en-US').format(date);
console.log(output); // 12/12/2020

// 2. GB date format
output = Intl.DateTimeFormat('en-GB').format(date);
console.log(output); // 12/12/2020

// 3. Just the month
output = Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);
console.log(output); // December

output = date.toLocaleString('en-GB', { month: 'long' });
console.log(output); // December

// 4. Custom date format
output = date.toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
});
console.log(output); // Tuesdat, 15 December 2020, 12:35:35


