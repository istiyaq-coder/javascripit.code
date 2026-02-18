/* Try redeclaring a let variable in same scope. What happens? */

let a = 10;
//let a = 20;   redeclaring in same scope is not allowed reference error

console.log(a);


/* Create a const variable and try changing it. */
const b = 10;

// b = 20;    trying to change it

console.log(b);

/* If const holds an object or array:

You cannot reassign, but you can modify inside it.

Example:
const arr = [1, 2, 3];

arr.push(4);   //allowed

console.log(arr);  // [1, 2, 3, 4]

arr = [5, 6];  // Error

 */