let day = +prompt("Введите день рождения");
let month = +prompt("Введите месяц рождения") - 1;
let year = +prompt("Введите год рождения");

let date = new Date();
let birthday = new Date(year, month, day);
console.log(date);

let age =
  date.getFullYear() -
  birthday.getFullYear() -
  (date < birthday.setFullYear(date.getFullYear()));

console.log("Вам сейчас " + age + " " + (age === 1 ? "год" : "лет") + ".");

function changeText(elem, txt) {
  elem.textContent = txt;
}
