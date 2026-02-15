/* Write a function that checks whether a value is null, undefined, or a valid value. */

function check(value) {
    console.log(typeof value);

    if (value === null) {
        console.log("Value is null");
    } 
    else if (typeof value === "undefined") {
        console.log("Value is undefined");
    } 
    else {
        console.log("Value is valid:", value);
    }
}

check(null);
check(undefined);
check(786);
check("Allah");

