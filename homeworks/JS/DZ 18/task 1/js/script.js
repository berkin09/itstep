let button = document.querySelector(".section__btn");
let bloquote = document.querySelector(".section__bloquote");

let arrBloquote = [
  "Недостаточно овладеть премудростью, нужно также уметь пользоваться ею",
  "Тем, кто хочет учиться, часто вредит авторитет тех, кто учит",
  "Трудно быть хорошим.",
  "Где умирает надежда, там возникает пустота.",
  "Подумай, как трудно изменить себя самого, и ты поймешь, сколь ничтожны твои возможности изменить других.",
  "Невежество — ночь ума, ночь безлунная и беззвездная.",
  "Есть только одно благо — знание, и только одно зло — невежество.",
  "Блаженство тела состоит в здоровье, блаженство ума — в знании.",
  "Познавший самого себя — собственный палач.",
  "Благородный муж думает о должном. Низкий человек думает о том, что выгодно.",
];

button.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * arrBloquote.length);
  bloquote.innerText = arrBloquote[rand];
});
