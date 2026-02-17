/* Write a function that checks if a number is:

Positive
Negative
Zero */

let num = 34;

if (isNaN(num)) {
    console.log("Not a number");
} else if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
