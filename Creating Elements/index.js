
const mainHeading = document.querySelector('#main-heading');
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";

subHeading.style.fontStyle = "italic";

mainHeading.insertAdjacentElement("afterend", subHeading);

const secondDiv = document.querySelectorAll("div")[1];

const para = document.createElement("p");
para.textContent = "Total fruits: 4";

para.id = "fruits-total";

const fruitsList = secondDiv.querySelector("ul");
secondDiv.insertBefore(para, fruitsList);
