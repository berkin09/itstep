// /* 2. Создать массив из названий цветов (4-5 цветов). Написать функцию, которая случайным образом меняет цвет у карточки раз в 3 секунды. */

// let card1 = document.querySelector(".card-1");
// let card2 = document.querySelector(".card-2");
// let card3 = document.querySelector(".card-3");

// let colors = ["red", "blue", "green", "grey", "yellow"];

// function colorChange1() {
//   let rand = Math.floor(Math.random() * colors.length);
//   card1.style.backgroundColor = colors[rand];
// }
// function colorChange2() {
//   let rand = Math.floor(Math.random() * colors.length);
//   card2.style.backgroundColor = colors[rand];
// }
// function colorChange3() {
//   let rand = Math.floor(Math.random() * colors.length);
//   card3.style.backgroundColor = colors[rand];
// }

// setInterval(colorChange1, 3000);
// setInterval(colorChange2, 3000);
// setInterval(colorChange3, 3000);

// 2 способ сокращенный
// let cards = document.querySelectorAll(".card");
// let colors = ["red", "blue", "green", "grey", "yellow"];

// function colorChange(card) {
//   let rand = Math.floor(Math.random() * colors.length);
//   card.style.backgroundColor = colors[rand];
// }

// cards.forEach(function (card) {
//   setInterval(function () {
//     colorChange(card);
//   }, 3000);
// });
