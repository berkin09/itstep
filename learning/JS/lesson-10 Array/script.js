// let apple = {
//     color: 'red',
//     isTasty: true,
//     weight: 200,
//     price: 1200,
//     //метод объекта
//     getColor: function() {
//         console.log(apple.color)
//     }
// }

// apple.color
// apple['color']

// Array
// let arr = [10, 20, 30, 40]
// arr[0] = 3;
// console.log(arr[0]);

// let arrProd = ['tea', 'milk', 'salt']
// // console.log(arrProd)
// // console.log(arrProd[1])
// // console.log(arrProd.length)

// // for(let i = 0; i<=arrProd.length-1; i++) {
// //     // if (arrProd[i] == 'milk') {
// //     //     console.log(i)
// //     // }
// //     console.log(arrProd[i], i)
// // }

// //добавление элемента в конец массива 
// arrProd.push('apple')
// console.log(arrProd)

// //удаление элемента в конец массива
// console.log(arrProd.pop())
// console.log(arrProd)

// //добавление элемента в начало массива 
// arrProd.unshift('banan')
// console.log(arrProd)

// //удаление элемента в начало массива
// arrProd.shift()
// console.log(arrProd)


// let arrNum = [1, 44, 652, 6, -7]
// //сортировка массива по возрастанию через стрелочную функцию
// console.log(arrNum.sort((a, b) => a-b))
// //сортировка массива по возрастанию через функцию
// console.log(arrNum.sort(function(a, b) { 
//     return a-b
// }))

// //сортировка массива по unicode
// console.log(arrNum.sort())

// 1 задача
// let numArr=[0,12,3,6]
// let num1 = prompt('Введите число')
// if(num1<numArr.length) {
//     numArr[num1]
// }

// 2 задача
// numArr.push(17, 42)
// console.log(numArr)

// 3 задача
// console.log(numArr.pop()*5)
// console.log(numArr)

// 4 задача
// numArr.unshift(21, 31)
// console.log(numArr)
// console.log(numArr.shift()+9)
// console.log(numArr)

// 5 задача
// console.log(numArr.length)
// for(let i=0; i<numArr.length; i++) {
//     console.log(numArr[i])
// }

// 1 задача
let lengthArr = +prompt('Введите длину массива')
let numArr = [];
for (let i=0; i<lengthArr; i++) {
    numArr[i] = +prompt('Заполните массив')
}
console.log(numArr)

function arraySum(numArr){ 
    let sum = 0; 
    for(let i = 0; i < numArr.length; i++) { 
        sum += numArr[i]; 
    } 
        console.log(sum); 
    } 
        arraySum(numArr);

// 2 задача
function maxArr(numArr) {
    let max = 0;
    for(let i=0; i<numArr.length; i++) {
        if((numArr[i]) > max){
            max = numArr[i];
        }
    }
    console.log(max)
}
maxArr(numArr);

// 3 задача 
function zeroArr(numArr) {
    numArr[0] = undefined;
    numArr[numArr.length-1] = undefined;
}
zeroArr(numArr);
console.log(numArr)