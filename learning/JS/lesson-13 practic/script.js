// /*1.	Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа 
// убедитесь, что переменных принадлежат типам: string, number, boolean.*/

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);




// /*2.	Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см (в числовую переменную width), 
// значение площади должно хранится в числовой переменной s. */

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(`Площадь прямоугольника ${s} см`);




// /* 3.	Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v. */

// let heightC = 10;
// let dC = 4;
// let v = Math.PI*((dC/2)**2) * heightC;
// console.log(`Объем цилиндра: ${Math.round(v)} м.`)



// /*4.	Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10. */
// let num = 670;
// let i = 45;
// let result;
// while(i<=num) {
//     if(i % 10 === 0) {
//         console.log(i)
//     }
//     i++;
// }





// /* 5.	Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for . */
// let d2 = [45,78,10,3];
// let sum2 = 0;
// for(i=0; i<d2.length; i++) {
//     sum2 = sum2 + d2[i];
// }
// console.log(sum2);




// /* 6.	Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />) */
// let img = 'https://training.epam.uz/static/news/255/self-study_03375353.png';
// for(let i=0; i<10; i++) {
//     let result = `<img src="${img}" alt="img" />`
//     document.write(result);
// }




/* 7.	Напишите функцию words(),  которая в зависимости от переданного в нее целочисленного аргумента n, 
будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0 */
// let n = 0;

// function words(n) {
//     if (n % 10 === 1) {
//         console.log(`${n} товар`)
//     } else if (n % 10 > 1 && n % 10 < 5) {
//         console.log(`${n} товара`)
//     } else if (n % 10 > 4 && n % 10 < 11) {
//         console.log(`${n} товаров`)
//     } else if (n % 10 === 0) {
//         console.log(`${n} товаров`)
//     }
// }
// words(10);




// /*8.	Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка */
// let n = 2;
// let str = '';
// function repeat(str, n) {
//     for(let i=0; i<n; i++) {
//         console.log(str)
//     }
// }
// repeat('Javascript', 5);




/*9.	Опишите класс Human:  для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы . 
Создайте массив humans из десяти объектов:
«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175
Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), метод геттер firstname ( он должен возвращать свойство name объекта)
 */

// class Human {
//     constructor (name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }
//         getInfo () {
//             return this.name + ', ' + this.age + ', ' + this.height;
//     }
//         firstName () {
//             return this.name;
//         }
// }

// let humans = [
//     new Human ('Коля', 23, 180),
//     new Human ('Даша', 19, 170),
//     new Human ('Ваня', 18, 192),
//     new Human ('Петя', 45, 178),
//     new Human ('Вася', 34, 197),
//     new Human ('Джони', 40, 168),
//     new Human ('Катя', 37, 160),
//     new Human ('Петя', 29, 200),
//     new Human ('Соня', 21, 172),
//     new Human ('Женя', 25, 175)
// ];

// for (let i=0; i<=humans.length-1; i++) {
// 	console.log(humans[i].getInfo());
// }