/* Rewrite the above grading system using switch(true). */

let num = 98;

switch (true) {
    case (num >= 90):
        console.log("You get A grade");
        break;

    case (num >= 75):
        console.log("You get B grade");
        break;

    case (num >= 60):
        console.log("You get C grade");
        break;

    default:
        console.log("Fail");
}
