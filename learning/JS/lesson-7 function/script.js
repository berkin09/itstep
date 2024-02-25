//1. Напишите самую первую программу функцию, которая выводит привет мир.
// function helloWorld() {
//   console.log("Привет мир!");
// }
// helloWorld();

//2. Напишите функцию счётчик. Прибавляет на один. К числу.
// function num(a) {
//   a = a + 1;
//   console.log(a);
//   return a;
// }
// num(5);

// 3. Напишите функцию, которая возвращает ноль.
// function zero() {
//   return 0;
// }
// var result = zero();
// console.log(result);

// 4. Напишите функцию, которая проверит есть в трёхзначном числе повторы.
// function num(number) {
//   let a = Math.trunc(number / 100);
//   let b = Math.trunc((number % 100) / 10);
//   let c = number % 10;
//   if (a == b && a == c && b == c) {
//     console.log("У вас имеется три одинаковых цифра");
//   } else if (a == b || a == c || b == c) {
//     console.log("У вас имеется два одинаковых цифра");
//   } else {
//     console.log("У вас нету одинаковых цифра");
//   }
//   return;
// }
// num(566);

// 5. Напишите функцию, которая проверяет какое число от пользователя больше. Первое или второе.
// function num(a, b) {
//   if (a < b) {
//     console.log("У вас второе число больше первого");
//   } else if (a > b) {
//     console.log("У вас первое число больше второго");
//   } else if (a === b) {
//     console.log("У вас первое число равно второму");
//   } else {
//     console.log("Неверные данные");
//   }
// }
// num(51, 12);
