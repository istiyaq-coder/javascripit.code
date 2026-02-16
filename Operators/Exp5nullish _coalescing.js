/* Use the nullish coalescing operator (??) and logical OR (||) and show the difference with:

0
""
null
undefined */

console.log(0 || "Default");
console.log(0 ?? "Default");

console.log("" || "Default");
console.log("" ?? "Default");

console.log(null || "Default");
console.log(null ?? "Default");

console.log(undefined || "Default");
console.log(undefined ?? "Default");
