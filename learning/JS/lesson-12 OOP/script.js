// let book = {
//     title: 'Война и мир',
//     author: 'Лев Толстой',
//     getInfo: function() {
//         console.log(`На полке стоит ${this.title}`)
//     }
// }

// let book2 = {
//     title: 'Капитанская дочка',
//     author: 'Александр Пушкин',
//     getInfo: function() {
//         console.log(`На полке стоит ${this.title}`)
//     }
// }
// ---------------------------------
// function Book (t, a) {
//     this.author = a;
//     this.title = t;
// }
// let book1 = new Book('Война и мир', 'Лев Толстой');
// let book2 = new Book('Капитанская дочка','Александр Пушкин')
//----------------------------------------------------------------------
// class Book {
//     constructor(t, a) {
//         this.title = t;
//         this.author = a;
//     }
//     getInfo() {
//         console.log(`На полке стоит ${this.title}`)
//     }
// }

// let book1 = new Book('Война и мир', 'Лев Толстой');
// let book2 = new Book('Капитанская дочка','Александр Пушкин');

// book1.getInfo()
// console.log(book1);

// Создать класс Человек с начальными значениями name age gender
// class Human {
//     constructor(n, a, g) {
//         this.name = n;
//         this.age = a;
//         this.gender = g;
//     }
//     sayHello() {
//         console.log(`Привет - ${this.name}`)
//     }
// }

// let human1 = new Human('Ира', '28', 'Женский')
// let human2 = new Human('Камила', '15', 'Женский')

// human1.sayHello()
// human2.sayHello()

// console.log(human1.name)
// console.log(human2.name)

// Задачи

// 1. Создать объект посетителя с именом Alex. С возрастом 23. С телефоном 123254545.
// С фамилией Джонсон. И с функцией для приветствия.

// let visitor = {
//   name: "Alex",
//   age: 23,
//   telephone: 123254545,
//   surname: "Джонсон",
//   sayHello: function () {
//     console.log(`Привет ${(this.name, this.surname)} `);
//   },
// };

// visitor.sayHello();
// console.log(visitor.name);

// 2. Создайте класс Посетителя с двумя параметрами - именем и возрастом через конструктор. После этого создайте несколько посетителей через этот класс.

// class Visitor {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let visitor1 = new Visitor("Беркин", 31);
// let visitor2 = new Visitor("Алина", 23);
// let visitor3 = new Visitor("Хан", 8);

// console.log(visitor1.name);
// console.log(visitor1.age);

// 3. Создайте класс для времени, который принимает секунды, минуты и часы. А также метод для отображения времени. И методы для добавления часов, минут и секунд.

class Clock {
  constructor(seconds, minutes, hours) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }
  displayTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
  addHours(hours) {
    this.hours += hours;
  }
  addMinutes(minutes) {
    this.minutes += Math.floor((this.minutes + minutes) / 60);
    this.minutes = (this.minutes + minutes) % 60;
  }
  addSeconds(seconds) {
    this.minutes += Math.floor((this.seconds + seconds) / 60);
    this.seconds = (this.seconds + seconds) % 60;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
  }
}

let timeSet = new Clock(10, 30, 45);
console.log("Время:", timeSet.displayTime());

timeSet.addHours(2);
console.log("после добавление 2 часов:", timeSet.displayTime());

timeSet.addMinutes(45);
console.log("После добавление 45 минут:", timeSet.displayTime());

timeSet.addSeconds(120);
console.log("После добавление 120 секунд:", timeSet.displayTime());
