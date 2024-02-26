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
// let array1 = [2, 41, 57, 23, 4, 85, 9];
// let array2 = [5, -4, 41, 25, 4, 13, 15];
// for (let i = 0; i < (array1.length, array2.length); i++) {
//     if (array1[i] === array2[i]) {
//         console.log(`${array1[i]} равно ${array2[i]}`);
//     } else if (array1[i] > array2[i]) {
//         console.log(`${array1[i]} больше ${array2[i]}`);
//     } else {
//         console.log(`${array1[i]} меньше ${array2[i]}`);
//     }
// }

// 4. Создать массив из 10 чисел. Сохранить во второй массив только те значения первого массива, которые являются четными.
// let array = [2, 41, 57, 23, 4, 85, 9, 86, 10, 13];
// let array2 = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         array2.push(array[i])
//     }
// }
// console.log(array2)