/* Check if a number is even or odd. */

const num = "h";

if (typeof num !== "number" || isNaN(num)) {
    console.log("The given input is not a number");
} else if (num % 2 === 0) {
    console.log("The given number is even");
} else {
    console.log("The given number is odd");
}
