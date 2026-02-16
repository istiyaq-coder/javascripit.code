/* Write a program using logical operators to check:
User age > 18
Has ID
Is not banned */

let age = 24;
let hasID = true;
let isBanned = false;

(age > 18 && hasID && !isBanned)
    ? console.log("Access Granted")
    : console.log("Access Denied");

