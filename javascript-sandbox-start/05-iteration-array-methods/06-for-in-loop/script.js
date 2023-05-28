// ------ loop through an objects value ------
console.log(`------ loop through an objects value ------ `);

const colourObjects = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow',
    color5: 'pink',
    color6: 'purple',
    color7: 'orange',
};

console.log(`Key : Value`);
for (const key in colourObjects) {
    console.log(`${key} : ${colourObjects[key]}`);
}

// ------ looping through array ------ 
console.log(`------ looping through array ------ `);

const colours = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];

console.log(`Index : Value`);
for (const index in colours) {
    console.log(`${index} : ${colours[index]}`);
}