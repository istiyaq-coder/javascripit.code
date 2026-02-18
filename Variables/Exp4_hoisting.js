/* Write a function that shows hoisting behavior of:
var
let
const
function declaration */

var a;          // hoisted
console.log(a); // undefined
a = 10;         // assignment stays here

function testHoisting() {
  console.log(r); // undefined
  var r = 5;

  // console.log(b); // ReferenceError tdz
  let b = 10;

  // console.log(c); // ReferenceError tdz
  const c = 15;
}

testHoisting();
