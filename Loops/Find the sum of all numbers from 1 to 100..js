/* Find the sum of all numbers from 1 to 100. */
let sum = 0;

for (let i = 1; i < 101; i++) {
  sum += i;
}

console.log(sum);



//                                  OR



let n = 100;
let sumi = (n * (n + 1)) / 2;

console.log(sumi);




 //                               OR


let sumin = 0;
let i = 0;

while (i < 101) {
    sumin += i;
  i++;
}
console.log(sumin);
