/* Demonstrate block scope:
Declare variables inside {} using var, let, and const.
Try accessing them outside the block. */

{
    var a = 12;
    let b = 14;
    const c = 15;
}
console.log(a);
console.log(b);// reference errror
console.log(c);// reference errror