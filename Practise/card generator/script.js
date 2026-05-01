let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value); // just added quotes

    let h1 = document.createElement("h1");
    h1.textContent = inputs[1].value;   // fixed

    let h3 = document.createElement("h3");
    h3.textContent = inputs[2].value;   // fixed (h2 → h3)

    let h5 = document.createElement("h5");
    h5.textContent = inputs[3].value;   // fixed

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(h5);

    main.appendChild(card);
});