let pass = document.querySelector(".new__password");
let confPass = document.querySelector(".confirm__password");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pass.value === confPass.value) {
    alert("Все ок");
  } else {
    alert("Ошибка!");
  }
});
