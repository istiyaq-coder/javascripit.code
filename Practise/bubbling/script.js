

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (dets) {
//         dets.target.style.textDecoration = "line-through";
// });

let ul = document.querySelector("ul");

 ul.addEventListener("click", function (dets) {
    dets.target.classList.toggle("lt");
});