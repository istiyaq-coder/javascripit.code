let box = document.createElement("div");
    box.classList.add("box");

box.addEventListener("mouseover",function(){
box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout",function(){
box.style.backgroundColor = "red";
});
  
document.body.appendChild(box);


// when i have the div in the html file thten use this approach

// let box = document.querySelector(".box");

// box.addEventListener("mouseover",function(){
// box.style.backgroundColor = "yellow";
// });

// box.addEventListener("mouseout",function(){
// box.style.backgroundColor = "red";
// });
