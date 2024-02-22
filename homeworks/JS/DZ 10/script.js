// //1. Создать массив из 10 чисел. Вывести наибольшее и наименьшее значения массивов.
// let numArr = [23, -200, 15, 45, 99, 85, 105, -54, 32, 0];
// function maxArr(numArr) {
//     let max = 0;
//     let min = 0;
//     for(let i=0; i<numArr.length; i++) {
//         if((numArr[i]) > max){
//             max = numArr[i];
//         }
//         if((numArr[i]) < min){
//             min = numArr[i];
//         } 
//     }
//     console.log(`Максимальный элемент из массива: ${max}`)
//     console.log(`Минимальный элемент из массива: ${min}`)
// }
// maxArr(numArr);

// // 2. Заполнить массив из 5 чисел при помощи prompt. Вывести массив, сумму значений и среднее значение массива.
// let lengthArr = 5;
// let numArr = [];
// let sum = 0;
// let averageValue;
// for (let i=0; i<lengthArr; i++) {
//     numArr[i] = +prompt('Заполните массив')
// }
// for(let i = 0; i < numArr.length; i++) { 
//     sum += numArr[i];
// } 
// averageValue = sum / lengthArr;
// console.log(`Сумма: ${sum}, Среднее значение: ${averageValue}`); 

// 3. Создать 2 массива из 7 чисел. Сравнить значения в массиве по очереди и выводить информацию в консоль (сравнение производить по индексам, 0 с 0 в обоих массивах и т.д.).
let array1 = [2, 41, 57, 23, 4, 85, 9];
let array2 = [5, -4, 41, 25, 4, 13, 15];
