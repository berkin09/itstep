/* 3. Создать html-страницу для магазина книг. Пользователь должен иметь возможность выбрать книгу, указать количество экземпляров, 
ввести свое имя, дату доставки, адрес доставки и комментарий. После заполнения формы необходимо вывести на экран: «Имя покупателя, спасибо за заказ. 
Такой-то товар будет доставлен в такую-то дату по такому-то адресу». */

let btn1 = document.querySelector(".card-1 button");
let btn2 = document.querySelector(".card-2 button");
let btn3 = document.querySelector(".card-3 button");

let buy = document.querySelector(".boxUser button");

let bookInfo = document.querySelector("#book");

btn1.addEventListener("click", () => {
  bookInfo.value = document.querySelector(".card-1 .card__title").innerText;
});

btn2.addEventListener("click", () => {
  bookInfo.value = document.querySelector(".card-2 .card__title").innerText;
});

btn3.addEventListener("click", () => {
  bookInfo.value = document.querySelector(".card-3 .card__title").innerText;
});

buy.addEventListener("click", (event) => {
  event.preventDefault();
  let userName = document.getElementById("name").value;
  let deliveryDate = document.getElementById("deliveryDate").value;
  let deliveryAddress = document.getElementById("delivery").value;
  let quantity = document.getElementById("quantity").value;
  let resultName = document.querySelector(".result__name");
  let resultTxt = document.querySelector(".result__txt");

  resultName.textContent = `${userName}, спасибо за заказ!`;
  resultTxt.textContent = `Товар "${bookInfo.value}" в количестве ${quantity} будет доставлен ${deliveryDate} по адресу: ${deliveryAddress}.`;
});
