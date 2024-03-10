/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
• Функция для вывода на экран информации об автомобиле.
• Функция для подсчета необходимого времени для преодоления переданного расстояния.*/

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   productionDate: new Date(2022, 0, 1),
//   averageSpeed: 100,
// };

// var options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   weekday: "long",
// };

// function displayCarInfo(car) {
//   console.log(`Марка: ${car.brand}`);
//   console.log(`Модель: ${car.model}`);
//   console.log(
//     `Дата выпуска: ${car.productionDate.toLocaleString("ru-RU", options)}`
//   );
//   console.log(`Средняя скорость: ${car.averageSpeed} км`);
// }

// function calculateTime(distance, car) {
//   const currentDate = new Date();
//   const timeInHours = distance / car.averageSpeed;
//   const estimatedArrival = new Date(
//     currentDate.getTime() + timeInHours * 60 * 60 * 1000
//   );

//   console.log(
//     `Текущая дата и время: ${currentDate.toLocaleString(
//       "ru-RU",
//       options
//     )} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
//   );

//   console.log(
//     `Ожидаемое прибытие: ${estimatedArrival.toLocaleString()} ${estimatedArrival.toLocaleTimeString()}`
//   );
// }

// displayCarInfo(car);
// calculateTime(120, car);

/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
• Функция сложения 2-х объектов-дробей.
• Функция вычитания 2-х объектов-дробей.
• Функция умножения 2-х объектов-дробей.
• Функция деления 2-х объектов-дробей.
• Функция сокращения объекта-дроби.*/

// let fraction1 = {
//   numerator: 1,
//   denominator: 2,
// };

// let fraction2 = {
//   numerator: 3,
//   denominator: 4,
// };

// // Функция сложения 2-х объектов-дробей.
// function addFractions(fraction1, fraction2) {
//   return {
//     numerator:
//       fraction1.numerator * fraction2.denominator +
//       fraction2.numerator * fraction1.denominator,
//     denominator: fraction1.denominator * fraction2.denominator,
//   };
// }

// // Функция вычитания двух дробей
// function subtractFractions(fraction1, fraction2) {
//   return {
//     numerator:
//       fraction1.numerator * fraction2.denominator -
//       fraction2.numerator * fraction1.denominator,
//     denominator: fraction1.denominator * fraction2.denominator,
//   };
// }

// // Функция умножения двух дробей
// function multiplyFractions(fraction1, fraction2) {
//   return {
//     numerator: fraction1.numerator * fraction2.numerator,
//     denominator: fraction1.denominator * fraction2.denominator,
//   };
// }

// // Функция деления двух дробей
// function divideFractions(fraction1, fraction2) {
//   return {
//     numerator: fraction1.numerator * fraction2.denominator,
//     denominator: fraction1.denominator * fraction2.numerator,
//   };
// }

// // Функция сокращения дроби
// function simplifyFraction(fraction) {
//   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//   const commonDivisor = gcd(fraction.numerator, fraction.denominator);

//   return {
//     numerator: fraction.numerator / commonDivisor,
//     denominator: fraction.denominator / commonDivisor,
//   };
// }

// console.log("Sum:", addFractions(fraction1, fraction2));
// console.log("Difference:", subtractFractions(fraction1, fraction2));
// console.log("Product:", multiplyFractions(fraction1, fraction2));
// console.log("Quotient:", divideFractions(fraction1, fraction2));
