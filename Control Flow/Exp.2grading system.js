/* Write a grading system using if/else:

90+ → A
75–89 → B
60–74 → C
Below 60 → Fail */

 let num = 89;

if (num >= 90) {
    console.log("You get A grade");
} else if (num >= 75) {
    console.log("You get B grade");
} else if (num >= 60) {
    console.log("You get C grade");
} else {
    console.log("Fail");
}
