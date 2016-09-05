console.time('hello + date');

console.log('Hello'.toUpperCase());

var now = new Date();
console.log(now.getYear());


console.timeEnd('hello + date');

function hello() {
    console.log('Hello');
}

var id = setInterval(hello, 1000);

setTimeout(function timeoutCallback() {
    console.log('Au revoir');
    clearInterval(id);
}, 3000);