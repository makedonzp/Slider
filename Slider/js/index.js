const sliderItems = [
  {
    townFirst: "Rostov-on-Don",
    townSecond: "LCD admiral",
    size: "81 m²",
    repair: "3.5 mounths",
    cost: "Upon request",
    img: "http://interior-lux.ru/wp-content/uploads/2016/02/krasivyi-.jpg",
  },
  {
    townFirst: "Sochi",
    townSecond: "Thieves",
    size: "105 m²",
    repair: "4 mounths",
    cost: "Upon request",
    img: "http://interior-lux.ru/wp-content/uploads/2014/08/kuhna2.jpg",
  },
  {
    townFirst: "Rostov-on-Don",
    townSecond: "Patriotic",
    size: "93 m²",
    repair: "3 mounths",
    cost: "Upon request",
    img: "http://interior-lux.ru/wp-content/uploads/2016/07/Komnata_1_com_08-.jpg",
  },
];

const image = document.querySelector(".slider_line");

const firstLink = document.querySelector(".first_link");
const secondLink = document.querySelector(".second_link");
const thirdLink = document.querySelector(".third_link");

const firstDot = document.querySelector(".first_dot");
const secondDot = document.querySelector(".second_dot");
const thirdDot = document.querySelector(".third_dot");

const prev = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");

const town = document.querySelector(".town");
const size = document.querySelector(".size");
const repairTime = document.querySelector(".repair_time");
const repairCost = document.querySelector(".repair_cost");

let indexPosition = 0;
let step = 0;

for (let i = 0; i < sliderItems.length; i++) {
  image.innerHTML += `<img src="${sliderItems[i].img}" alt="" />`;
}

town.innerHTML = `<p>${sliderItems[indexPosition].townFirst} <br />${sliderItems[indexPosition].townSecond}</p>`;
size.innerHTML = `<p>${sliderItems[indexPosition].size}</p>`;
repairTime.innerHTML = `<p>${sliderItems[indexPosition].repair}</p>`;
repairCost.innerHTML = `<p>${sliderItems[indexPosition].cost}</p>`;

firstLink.addEventListener("click", () => {
  firtsPosition(town, size, repairTime, repairCost);
  image.style.right = `0px`;
});
secondLink.addEventListener("click", () => {
  secondPosition(town, size, repairTime, repairCost);
  image.style.right = `780px`;
});
thirdLink.addEventListener("click", () => {
  thirdPosition(town, size, repairTime, repairCost);
  image.style.right = `1560px`;
});
firstDot.addEventListener("click", () => {
  firtsPosition(town, size, repairTime, repairCost);
  image.style.right = `0px`;
});
secondDot.addEventListener("click", () => {
  secondPosition(town, size, repairTime, repairCost);
  image.style.right = `780px`;
});
thirdDot.addEventListener("click", () => {
  thirdPosition(town, size, repairTime, repairCost);
  image.style.right = `1560px`;
});
next.addEventListener("click", listForward);
prev.addEventListener("click", listBackward);
setInterval(function () {
  listForward();
}, 2500);
function addClass(link, prop) {
  link.classList.add(prop);
}
function removeClass(link, prop) {
  link.classList.remove(prop);
}
function firtsPosition(prop, prop1, prop2, prop3) {
  prop.innerHTML = `<p>${sliderItems[0].townFirst} <br />${sliderItems[0].townSecond}</p>`;
  prop1.innerHTML = `<p>${sliderItems[0].size}</p>`;
  prop2.innerHTML = `<p>${sliderItems[0].repair}</p>`;
  prop3.innerHTML = `<p>${sliderItems[0].cost}</p>`;
  firstActiveElems();
}
function secondPosition(prop, prop1, prop2, prop3) {
  prop.innerHTML = `<p>${sliderItems[1].townFirst} <br />${sliderItems[1].townSecond}</p>`;
  prop1.innerHTML = `<p>${sliderItems[1].size}</p>`;
  prop2.innerHTML = `<p>${sliderItems[1].repair}</p>`;
  prop3.innerHTML = `<p>${sliderItems[1].cost}</p>`;
  secondActiveElems();
}
function thirdPosition(prop, prop1, prop2, prop3) {
  prop.innerHTML = `<p>${sliderItems[2].townFirst} <br />${sliderItems[2].townSecond}</p>`;
  prop1.innerHTML = `<p>${sliderItems[2].size}</p>`;
  prop2.innerHTML = `<p>${sliderItems[2].repair}</p>`;
  prop3.innerHTML = `<p>${sliderItems[2].cost}</p>`;
  thirdActiveElems();
}
function firstActiveElems() {
  firstLink.classList.add("active_link");
  secondLink.classList.remove("active_link");
  thirdLink.classList.remove("active_link");
  firstDot.classList.add("active_dot");
  secondDot.classList.remove("active_dot");
  thirdDot.classList.remove("active_dot");
}
function secondActiveElems() {
  secondLink.classList.add("active_link");
  firstLink.classList.remove("active_link");
  thirdLink.classList.remove("active_link");
  firstDot.classList.remove("active_dot");
  secondDot.classList.add("active_dot");
  thirdDot.classList.remove("active_dot");
}
function thirdActiveElems() {
  addClass(thirdLink, "active_link");
  addClass(thirdDot, "active_dot");
  removeClass(firstLink, "active_link");
  removeClass(secondLink, "active_link");
  removeClass(firstDot, "active_dot");
  removeClass(secondDot, "active_dot");
}
function listForward() {
  indexPosition++;
  step = step + 780;
  image.style.right = `${step}px`;
  if (step == 0) {
    firtsPosition(town, size, repairTime, repairCost);
  } else if (step == 780) {
    secondPosition(town, size, repairTime, repairCost);
  } else if (step == 1560) {
    thirdPosition(town, size, repairTime, repairCost);
  }
  if (step > 1560) {
    step = 0;
    firtsPosition(town, size, repairTime, repairCost);
    image.style.right = `${step}px`;
  } else if (step < 0) {
    step = 1560;
    thirdPosition(town, size, repairTime, repairCost);
    image.style.right = `${step}px`;
  }
}
function listBackward() {
  indexPosition--;
  step = step - 780;
  image.style.right = `${step}px`;
  if (step == 0) {
    firtsPosition(town, size, repairTime, repairCost);
  } else if (step == 780) {
    secondPosition(town, size, repairTime, repairCost);
  } else if (step == 1560) {
    thirdPosition(town, size, repairTime, repairCost);
  }
  if (step > 1560) {
    step = 0;
    firtsPosition(town, size, repairTime, repairCost);
    image.style.right = `${step}px`;
  } else if (step < 0) {
    step = 1560;
    thirdPosition(town, size, repairTime, repairCost);
    image.style.right = `${step}px`;
  }
}
