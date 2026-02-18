/* Create two variables a and b. Swap their values without using a third variable. */

var a = 12;
var b = "manoj";

console.log(a, b);

[a, b] = [b, a];// array destructuring assignment

console.log(a, b);
