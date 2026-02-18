/* Declare three variables using var, let, and const and log their values.
Then try redeclaring each and observe behavior. */

var a = 12;
let b = 13;
const c = 14;

console.log(a);
console.log(b);
console.log(c);// return only work within the functions

a = "khan";// reassign and redeclare not allowed
b = "suraj";// can reassign cant redeclare
// c = "ram"; not allowed give type error reassign not allowed

console.log(a);
console.log(b);
console.log(c);
