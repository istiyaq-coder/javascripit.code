/* Reverse a number

Example:

Input: 1234
Output: 4321 */

let num = 1234507980;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;        // get last digit
    reversed = reversed * 10 + digit; 
    num = Math.floor(num / 10);  // remove last digit
}

console.log(reversed);