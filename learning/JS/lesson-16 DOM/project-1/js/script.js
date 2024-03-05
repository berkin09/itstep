let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");

// Проверили
// console.log(card1);
// console.log(card2);
// console.log(card3);

function changeProp(elem, props) {
  //   elem.style.background = obj.background;
  for (let key in props) {
    elem.style.cssText = props;
  }
}

function changeText(elem, txt) {
  elem.textContent = txt;
}

function addDescription(elem, dsc) {
  elem.innerHTML = dsc;
}

changeProp(card1, { background: "lightblue", color: "red" });

changeText(card2.querySelector("a"), "Buy");

addDescription(
  card3.querySelector(".card__text"),
  "<span>Классные кроссовки</span>"
);
