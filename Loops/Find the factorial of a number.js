/* Find the factorial of a number (e.g., 5 → 120). */

let num = 5;
let factorial = 1;

for (let i = 1 ; i <= num ; i++){
    factorial *= i;
}
console.log(factorial);

//                                  or  

let i = 1;
let factoriaal = 1;

while(i < 6){
    factoriaal *= i;
    i++;
}

console.log(factoriaal);