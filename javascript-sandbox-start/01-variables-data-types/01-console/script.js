console.log(100);

console.log('Hello World!');

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

console.error('This is an error message');

console.warn('This is a warning message');

console.table(['John', 'Doe', 'Jane', 'Doe']);

console.group('simple');
console.error('This is an error message');
console.warn('This is a warning message');
console.table({owner: 'John', employee: 'Doe', cleaner: 'Jane', threat: 'Doe'});
console.groupEnd();

const style = 'padding 10px; background: #222; color: #bada55; font-size: 20px;';
console.log('%cHello World!', style);