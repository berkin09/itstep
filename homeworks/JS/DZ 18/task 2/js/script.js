let sectionColor = document.querySelector(".section__color");

function changeColor(color) {
  sectionColor.style.backgroundColor = color;
}

document.addEventListener("mousemove", (event) => {
  let colors = ["red", "green", "blue", "yellow", "orange"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];
  changeColor(randomColor);
});
