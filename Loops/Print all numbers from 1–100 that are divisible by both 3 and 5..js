/* Print all numbers from 1–100 that are divisible by both 3 and 5. */

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) 
    console.log(i);
}

/*                         or                             */


for (let i = 15; i <= 100; i += 15) {
  console.log(i);
}
