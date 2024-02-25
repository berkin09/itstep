/*1. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить
пример, вывести результат и спросить, хочет ли он решить еще один пример.
И так до тех пор, пока пользователь не откажется.*/

// for (let i = 0; i < Infinity; i++) {
//   let num1 = +prompt("Введите первую цифру");
//   let num2 = +prompt("Введите вторую цифру");
//   let operator = prompt("Выберите операцию +,-,*,/");
//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       alert("Неверный оператор");
//       continue;
//   }
//   alert("Результат: " + result);

//   let answer = confirm("Хотите решить еще один пример?");
//   if (answer !== true) {
//     break;
//   }
// }

/*2. Зациклить вывод дней недели таким образом: «День недели. Хотите
увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/
// for (let i = 0; ; i++) {
//   let dayOfWeek;
//   switch (i % 7) {
//     case 0:
//       dayOfWeek = "Понедельник";
//       break;
//     case 1:
//       dayOfWeek = "Вторник";
//       break;
//     case 2:
//       dayOfWeek = "Среда";
//       break;
//     case 3:
//       dayOfWeek = "Четверг";
//       break;
//     case 4:
//       dayOfWeek = "Пятница";
//       break;
//     case 5:
//       dayOfWeek = "Суббота";
//       break;
//     case 6:
//       dayOfWeek = "Воскресенье";
//       break;
//   }
//   let userResponse = confirm(`${dayOfWeek}. Хотите увидеть следующий день?`);
//   if (!userResponse) {
//     break;
//   }
// }

/*3. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число
необходимо умножить на числа от 1 до 10.*/
let output = "";
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}
