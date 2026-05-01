let box = document.querySelector(".box");

window.addEventListener("mousemove", function (dets) {
  box.style.left = dets.clientX + "px";
  box.style.top = dets.clientY + "px";
});





