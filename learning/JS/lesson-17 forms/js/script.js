let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");

function checNumber(num) {
  if (num >= 1 && num <= 10) {
    box1.classList.add("basic");
    box1.textContent = num;
  } else if (num > 10 && num <= 50) {
    box2.classList.add("warning");
    box2.textContent = num;
  } else if (num > 50 && num <= 100) {
    box3.classList.add("error");
    box3.textContent = num;
  } else {
    alert("Нарушение условия");
  }
}

checNumber(+prompt("Введите число от 1 до 100"));

setTimeout(, 2000);
checNumber(+prompt("Введите число от 1 до 100"));
