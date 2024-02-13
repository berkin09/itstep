//1.	Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// function compare (a, b) {
//     if (a<b) {
//         return -1
//     } else if (a>b) {
//         return 1
//     } else {
//         return 0
//     }
// }
// let result = compare(5, 7);
// console.log(result)

//2.	Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// function nums (a, b, c) {
//     let sum=a.toString()+b.toString()+c.toString()
//     return Number(sum)
// }
// let result=nums(2, 7, 5);
// console.log(result)

//3.	Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// function square(length, width) {
//     if (width === undefined) {
//         return length*length
//     } else {
//         return length*width
//     }
// }
// let result = square(5, 6);
// console.log(result)

//4. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// function clock(hour, minutes, seconds) {
//  if(minutes === undefined) {
//     minutes = 0;
//  }
//  if(seconds === undefined) {
//     seconds = 0;
//  }
//  if(hour<10) {
//     hour = '0' + hour;
//  }
//  if(minutes<10) {
//     minutes = '0' + minutes;
//  }
//  if(seconds<10) {
//     seconds = '0' + seconds;
//  }
//  let result = hour + ':' + minutes + ':' + seconds;
//  console.log(result)
// }
// clock(5,15, 12)

// 5. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// function clock(hour, minutes, seconds) {
//     if (minutes===undefined) {
//         minutes = 0;
//     }
//     if (seconds === undefined) {
//         seconds = 0;
//     }
//     let result = (hour*3600) + (minutes*60) + seconds
//     console.log(result)
//     return result;
// }
// clock(2)