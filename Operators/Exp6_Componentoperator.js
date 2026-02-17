/* Write a program that uses compound assignment operators (+=, -=, *=, /=) in a small financial calculation. */

let b = 2;
console.log(b);
b += 1;
console.log(b);
b -= 1;
console.log(b);
b *= 2;
console.log(b);
b /= 2;
console.log(b);

let balance = 1000;   // initial balance

balance += 500;       // deposit
balance -= 200;       // withdraw
balance *= 1.05;      // 5% interest
balance /= 1.10;      // 10% tax deduction

console.log(balance);
