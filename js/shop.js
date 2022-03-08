let current = 0;
let items = document.querySelectorAll(".slider_item");

let handleNext = () => {
  items[current].style.animation = "hideRight 1.5s forwards";
  items[current >= items.length - 1 ? 0 : current + 1].style.animation =
    "showRight 1.5s forwards";
  if (current < items.length - 1) {
    current++;
  } else {
    current = 0;
  }
};

let handlePrev = () => {
  items[current].style.animation = "hideLeft 1.5s forwards";
  items[current > 0 ? current - 1 : 2].style.animation =
    "showLeft 1.5s forwards";
  if (current > 0) {
    current--;
  } else {
    current = items.length - 1;
  }
};

window.onload = function () {
  setInterval("handleNext()", 3000);
};

