

console.log(2 / 0); // Infinity
console.log(typeof (2 / 0)); // number
console.log(isFinite(2 / 0)); // false

console.log(Math.sqrt(-1)); // NaN
console.log(typeof (Math.sqrt(-1))); // number
console.log(isNaN(Math.sqrt(-1))); // true