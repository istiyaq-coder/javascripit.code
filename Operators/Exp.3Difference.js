//== vs ===

//== → compares value only (does type conversion)

//=== → compares value + type (no conversion)

//Example:

5 == "5"; // true
5 === "5"; // false

//++i vs i++

//++i → increment first, then use value (pre-increment)

//i++ → use value first, then increment (post-increment)

//Example:

let i = 5;

console.log(++i); // 6
console.log(i++); // 6
console.log(i); // 7
