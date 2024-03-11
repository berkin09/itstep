let box = document.querySelector(".counter__box");
let num = document.querySelector(".counter__num");

let btnLeft = document.querySelector(".btn__left");
let btnRight = document.querySelector(".btn__right");

let counterCursor = document.querySelector(".counter__cursor");

let counterX = document.querySelector(".counter__x span");
let counterY = document.querySelector(".counter__y span");

let count = 1;

btnLeft.addEventListener("click", () => {
  if (count > 1) {
    count--;
    num.textContent = count;
    btnRight.style.backgroundColor = "Green";
  }
  if (count === 1) {
    btnLeft.style.backgroundColor = "Grey";
  }
});

btnRight.addEventListener("click", () => {
  if (count < 15) {
    count++;
    num.textContent = count;
    btnLeft.style.backgroundColor = "Yellow";
  }
  if (count === 15) {
    btnRight.style.backgroundColor = "Grey";
  }
});

box.addEventListener("mouseenter", () => {
  counterCursor.textContent = "enter";
});

box.addEventListener("mouseleave", () => {
  counterCursor.textContent = "leave";
});

box.addEventListener("mousemove", (e) => {
  console.log(e);
});

box.addEventListener("mousemove", (e) => {
  counterX.textContent = e.offsetX;
});

box.addEventListener("mousemove", (e) => {
  counterY.textContent = e.offsetY;
});
