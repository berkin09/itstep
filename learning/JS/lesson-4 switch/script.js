// let day = +prompt('Введите число от 1 до 7')
// switch (day) {
//     case 1: 
//         alert('ПН');
//         break;
//     case 2: 
//         alert('ВТ');
//         break;
//     case 3: 
//         alert('СР');
//         break;
//     case 4: 
//         alert('ЧТ');
//         break;
//     case 5: 
//         alert('ПТ');
//         break;
//     case 6: 
//         alert('СБ');
//         break;
//     case 7: 
//         alert('ВС');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// let age = +prompt('Введите ваш возраст')
// let mature = age>=18 ? 'Совершеннолетний' : 'Несовершеннолетний'
// alert(`${mature}`)

// let month = +prompt('Введите номер месяца от 1 до 12')
// switch (month) {
//     case 1: 
//         alert('Январь');
//         break;
//     case 2: 
//         alert('Февраль');
//         break;
//     case 3: 
//         alert('Март');
//         break;
//     case 4: 
//         alert('Апрель');
//         break;
//     case 5: 
//         alert('Май');
//         break;
//     case 6: 
//         alert('Июнь');
//         break;
//     case 7: 
//         alert('Июль');
//         break;
//     case 8: 
//         alert('Август');
//         break;
//     case 9: 
//         alert('Сентябрь');
//         break;
//     case 10: 
//         alert('Октябрь');
//         break;
//     case 11: 
//         alert('Ноябрь');
//         break;
//     case 12: 
//         alert('Декабрь');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// let num1 = +prompt('Введите первый цифр')
// let num2 = +prompt('Введите второй цифр')
// let op = prompt('Введите математическую операцию: +, -, *, /')

// switch(op) {
//     case '+':
//         alert(num1+num2);
//         break;
//     case '-':
//         alert(num1-num2);
//         break;
//     case '*':
//         alert(num1*num2);
//         break;
//     case '/':
//         alert(num1/num2);
//         break;
//     default:
//         alert('Ошибка')
//         break;
// }

// let month = +prompt('Введите номер месяца от 1 до 12')
// switch (month) {
//     case 1: 
//     case 2:
//     case 12: 
//         alert('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:    
//         alert('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:    
//         alert('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:    
//         alert('Осень');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }


// let num = 10;
// let result = num>10 ? 'yes' : num===10 ? '=': 'no'
// console.log(result)

// let age = +prompt('Введите возраст');
// let result = age>=0 && age<5 ? 'Привет малыш' : age>=5 && age<18 ? 'Привет' : age>=18 && age<=100 ? 'Здравствуйте' : 'необычный возраст'
// alert(result);

// let age = +prompt('Введите возраст');
// let result = age>0 && age<5 ? 'Привет малыш' : age<18 ? 'Привет' : age<=100 ? 'Здравствуйте' : 'необычный возраст'
// alert(result);

// let num1 = +prompt('Введите первую числу')
// let num2 = +prompt('Введите вторую числу')
// let result = num1>num2 ? `Большое число это ${num1}` : num1<num2 ? `Большое число это ${num2}` : 'Ровно'
// alert(result)

// let num = +prompt('Введите число')
// let result = num%5==0 ? 'Ваш цифр кратен к 5' : 'Ваш цифр не кратен к 5'
// alert(result)

// let planet = prompt('Введите название планеты')
// let result = planet == 'Земля' || planet == 'земля' ? 'Привет, землянин!' : 'Привет, инопланетянин!'
// alert(result)

//Пользователь вводит значение, преобразовать его в четное (через тернарный оператор)
// let num = +prompt('Введите число')
// let result = num % 2 == 0 ? 'У вас четное число' : num+1
// alert(result)

// Пользователь вводит время в часах. Вывести время суток.
// let hour = +prompt('Введите время в часах')
// let result = hour >= 0 && hour<6 ? 'Ночь' : hour>=6 && hour<12 ? "Утро" : hour>=12 && hour<18 ? 'День' : hour>=18 && hour<23 ? 'Вечер' : 'Неверное время'
// alert(result) 

// Вычисление периметра треугольника с проверкой на правильность длины сторон.
// let a = +prompt('Введите значение А')
// let b = +prompt('Введите значение B')
// let c = +prompt('Введите значение C')
// let p = a==c || a==b || b==c ? `Периметр треугольника = ${a+b+c}` : "значение сторон неправильно"
// alert(p)

//Вводится четырехзначное число. Проверить, написаны ли его цифры в порядке возрастания

