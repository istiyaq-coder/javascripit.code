/* Convert a string "100.25" into a number using 3 different methods. */

//can be considered for fun and coincer understanding

console.log(typeof ("100.25" % 45 ));

console.log(typeof ("100.25" / 45 ));

console.log(typeof ("100.25" - 45));

console.log(typeof ("100.25"*45));


//correct

let num = Number("100.25");
console.log(num);
console.log(typeof num);

let numb = parseFloat("100.25");
console.log(numb);
console.log(typeof numb);

let numbe = parseFloat("100.25");
console.log(numbe);
console.log(typeof numbe);
