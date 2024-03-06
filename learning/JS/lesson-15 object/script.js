// Конструкция с текущей датой и временем
// let date = new Date()
// console.dir(date)
// // Timestamp
// console.log(Date.now())

// 3 способа
// 12-06-2011 15:02:02
// 1
// y, m, d, h, m, s
// month c 0
// let date = new Date(2011, 5, 12, 15, 2, 2)
// console.log(date)
// 2
// 'YYYY-MM-DDTHH:mm:ss.sss'
// 'YYYY-MM-DDTHH:mm:ss.sssZ'
// let date = new Date('2011-06-12T15:02:02')
// console.log(date)
// 3
// let date = new Date(1709105345000)
// console.log(date)

// Method
// let date = new Date()
// console.dir(date)
// time
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// date
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getDate())

// date.setHours(date.getHours() + 2)
// console.log(date)

// Авто исправление даты
// let date = new Date(2024, 0, 35)
// console.log(date)
// var options = {
//   // era: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   weekday: 'long',
//   // timezone: 'UTC',
//   // hour: 'numeric',
//   // minute: 'numeric',
//   // second: 'numeric'
// };

// let date = new Date()
// console.log(date.toLocaleString("ru", options))
// console.log(date.toLocaleString("en-US", options) )
// console.log(date.toDateString())
// console.log(date.toTimeString())


// Task 1
// let arrMonth = ['Январь', 'Февраль']

// function randInt() {
//   return Math.floor( Math.random() * 12)
// }

// let m = randInt()

// for(let i=0; i<arrMonth.length; i++) {
//   if(m == i) {
//     console.log(arrMonth[i])
//   }
// }

// Task 2
// let date = new Date()
// let options = {
//   // era: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   // weekday: 'long',
//   // timezone: 'UTC',
//   // hour: 'numeric',
//   // minute: 'numeric',
//   // second: 'numeric'
// };
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// console.log(date.toLocaleString('ru', options), date.toLocaleString('ru', {weekday: 'long'}))
// console.log(date.toLocaleString('en-US', options))


// Task 3.1
// let name = 'Name'

// Variable 1
// function showName() {
//   console.log(name)
// }

// setTimeout(showName, 5000)

// Variable 2
// setTimeout(function()  {
//   console.log(name)
// }, 5000)

// Variable 3
// setTimeout(() => console.log(name), 5000)

// Task 3.2
// let name = 'Name'

// let timer = setInterval(() => console.log(name), 1000)
// setTimeout(()=> clearInterval(timer), 10000)

// Task 4
// let curDate = new Date()
// let NYDate = new Date(2025, 0, 1)

// console.log(NYDate - curDate)

// console.log(Math.floor((NYDate - curDate)  / 86400000) + ' дней')





