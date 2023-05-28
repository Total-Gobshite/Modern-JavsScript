// for of -- newer way to iterate over iterable objects: arrays, strings, maps, sets, etc.

// ------ array of strings ------
console.log('------ array of strings ------');
const names = ['YouTube', 'Facebook', 'Instagram', 'Netflix', 'Amazon'];

console.log('   --- old wat ---   ');
// old way
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('   --- new wat ---   ');
// new way
for (const n of names) {
    console.log(n);
}

// ------ array of objects ------
console.log('------ array of objects ------');
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];

console.log('   --- old wat ---   ');
// old way
for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i].title} - ${movies[i].score}/100`);
}

console.log('   --- new wat ---   ');
// new way
for (const movie of movies) {
    console.log(`${movie.title} - ${movie.score}/100`);
}

// ------ loop through strings ------
console.log('------ loop through strings ------');
const myName = 'Dmitriy';

console.log('   --- old wat ---   ');
// old way
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

console.log('   --- new wat ---   ');
// new way
for (const char of myName) {
    console.log(char);
}

// ------ loop through maps ------
console.log('------ loop through maps ------');
const movieReviews = new Map([
    ['Amadeus', 99],
    ['Stand By Me', 85],
    ['Parasite', 95],
    ['Alien', 90]
]);

console.log('   --- old wat ---   ');
// old way

const entries = Array.from(movieReviews.entries()); // convert map to array
console.log(entries);
// 0 ['Amadeus', 99]
// 1 ['Stand By Me', 85]
// 2 ['Parasite', 95]
// 3 ['Alien', 90]

for (let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]} - ${entries[i][1]}/100`);
}

console.log('   --- new wat 1 ---   ');
// new 2 way
for (const movie of movieReviews) {
    console.log(movie);
}

console.log('   --- new wat 2 ---   ');
// new way 1
for (const [movie, score] of movieReviews) {
    console.log(`${movie} - ${score}/100`);
}
