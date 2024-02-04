//1. Подсчитать сумму всех чисел в заданном пользователем диапазоне
// let num1 = +prompt('Задайте первую числу диапазона')
// let num2 = +prompt('Задайте вторую числу диапазона')
// let i=0
// while (num1<=num2) {
//     i=i+num1;
//     num1++
// }
// console.log(i)

//2. Запросить 2 числа и найти только наибольший общий делитель.
// let num1 = +prompt('Введите первую числу')
// let num2 = +prompt('Введите вторую числу')
// while (num1!==0 && num2!==0) {
//     if (num1>num2) {
//         num1 = num1%num2
//     } else {
//         num2 = num2%num1
//     }
// }
// console.log(num1+num2)

//3. Запросить у пользователя число и вывести все делители этого числа.
// let num = +prompt('Введите числу')
// let i = 0
// while(i<=num) {
//     if (num%i==0) {
//         console.log(i)
//     }
//     i++
// }    

//4. Определить количество цифр в введенном числе.
// let num = +prompt('Введите числу')
// let i = 0
// while(num!==0) {
//     num = Math.floor(num/10)
//     i++
// }
// console.log(i)


//5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;

let i = 0
while (i<10) {
    let num = +prompt('Введите 10 чисел');
    if (num>0) {
        positiveNumber++;
    } else if (num<0) {
        negativeNumber++;
    } else {
        zeroNumber++;
    }
    if (num%2===0) {
        evenNumber++;
    } else {
        zeroNumber++;
    }
    i++;
}
document.write(`<p>Положительные числа:${positiveNumber}</p>`)
document.write(`<p>Отрицательные числа:${negativeNumber}</p>`)
document.write(`<p>Нули:${zeroNumber}</p>`)
document.write(`<p>Четные числа:${evenNumber}</p>`)
document.write(`<p>Нечетные числа:${oddNumber}</p>`)
