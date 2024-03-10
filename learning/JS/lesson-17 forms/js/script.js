// let box1 = document.querySelector(".box-1");
// let box2 = document.querySelector(".box-2");
// let box3 = document.querySelector(".box-3");

// function checNumber(num) {
//   if (num >= 1 && num <= 10) {
//     box1.classList.add("basic");
//     box1.textContent = num;
//   } else if (num > 10 && num <= 50) {
//     box2.classList.add("warning");
//     box2.textContent = num;
//   } else if (num > 50 && num <= 100) {
//     box3.classList.add("error");
//     box3.textContent = num;
//   } else {
//     alert("Нарушение условия");
//   }
// }

// checNumber(+prompt("Введите число от 1 до 100"));

// setTimeout(, 2000);
// checNumber(+prompt("Введите число от 1 до 100"));

// console.log(document.forms);
// console.log(document.forms.myForm);

// let form = document.forms.myForm;
// console.log(form);
// console.log(form.elements);
// let login = form.elements.log;
// console.log(login);
// let password = form.elements.pass;
// console.log(password);

// let form = document.forms.form2;
// if (form) {
//   let input = form.elements.text;
//   let box = form.querySelector(".form-txt");
//   let btn = form.querySelector(".form-btn");

//   input.oninput = function () {
//     box.textContent = this.value;
//   };

//   input.onchange = function () {
//     box.textContent = this.value;
//     console.log(input.value);
//   };

//   input.onfocus = function () {
//     this.style.color = "red";
//   };

//   input.onblur = function () {
//     this.style.color = "blue";
//   };

//   btn.onclick = function (event) {
//     event.preventDefault();
//     console.log(event);
//   };
// }

//Работа с атрибутами
// let link = document.querySelector(".link");
// let url = "https://ru.wikipedia.org/";
// console.log(link.hasAttribute("href"));
// console.log(link.getAttribute("href"));
// link.setAttribute("href", url);
// console.log(link.getAttribute("href"));
// link.removeAttribute("href");
// console.log(link.hasAttribute("href"));

// Работа с select
// let select = document.querySelector(".select");
// let opt = new Option("анг", "en");
// select.add(opt);

// select.onchange = function () {
//   console.log(select.value);
//   console.log(select.selectedIndex);
// };

let user = {
  login: ...,
  pass: 
}