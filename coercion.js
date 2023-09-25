const { type } = require("os");

console.log({ toString() { return "Hello!"; } } + ""); // example string coercion
console.log(+{ valueOf() { return 3.14; } }); // example number coercion
console.log(!!{}); // example bool coercion

// Logical AND/OR
const a = 5;
const b = "abc";
const c = null;

console.log(a || b); // a is truthy therefore returns a
console.log(b || a); // b is truthy therefore returns b
console.log(c && a); // c is falsy therefore returns c