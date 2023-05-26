let date;

date = new Date();
console.log(date);
console.log(`The type of date is ${typeof date}`);
// anything that isn't a primitive data type is an object

date = date.toString(); // convert date to a string
console.log(date);

// to set a date, use the following format:
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// note that months are zero-indexed, so January is 0, February is 1, etc.
date = new Date(2020, 0, 1, 0, 0, 0, 0);
console.log(date);

date = new Date('January 1 2020 00:00:00');
console.log(date);

date = new Date('1/1/2020 00:00:00');
console.log(date);

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
// careful when using dashes to separate the date, as it can cause your date to be off by one day due to time zone differences

// timestamp -- number of milliseconds since January 1, 1970 00:00:00 UTC
date = Date.now(); // returns the current timestamp
console.log(date); 
// useful to mark the exact millisecond in time

// timestamp of a specific date
date = new Date('January 1 2020 00:00:00');
date = date.getTime(); // returns the timestamp of the date
console.log(date); 

date = date.valueOf(); // returns the timestamp of the date
console.log(date);

// creating date objects from timestamps
date = new Date(1577836800000);
console.log(date);

// convert timestamp (milliseconds) to minutes
date = Math.floor(Date.now() / 1000 / 60); // divide by 1000 to get seconds, divide by 60 to get minutes
console.log(date);