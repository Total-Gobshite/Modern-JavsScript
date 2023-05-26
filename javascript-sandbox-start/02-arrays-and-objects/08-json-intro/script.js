// JSON -- JavaScript Object Notation

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is post one',
};

console.log(post);

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str);

// Parse JSON -- convert JSON string to object
const obj = JSON.parse(str);
console.log(obj);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is post one',
    }, 
    {
        id: 2,
        title: 'Post Two',
        body: 'This is post two',
    },
];
console.log(posts);
const str2 = JSON.stringify(posts);

console.log(str2);

const obj2 = JSON.parse(str2);
console.log(obj2);

