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
class Human {
    constructor(n, a, g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }
    sayHello() {
        console.log(`Привет - ${this.name}`)
    }
}

let human1 = new Human('Ира', '28', 'Женский')
let human2 = new Human('Камила', '15', 'Женский')

human1.sayHello()
human2.sayHello()

console.log(human1.name)
console.log(human2.name)