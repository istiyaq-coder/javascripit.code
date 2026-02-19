/* Count how many numbers between 1–100 are even. */

let count = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    count += 1;
  }
}

console.log(`There are ${count} even number`);


//                      Or


let counts = 0;

for (let i = 2; i <= 100; i += 2) {
  counts++;
}

console.log(`There are ${counts} even numbers`);
