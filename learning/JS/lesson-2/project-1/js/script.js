// let bonus = +prompt('Введите общую сумму продажа')

// const zp = 250;

// alert(`Ваша зарпалата на этот месяц составляет: ${zp + (bonus/100*10)} $`)

//8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
// let number = +prompt('Введите трехзначное число')

// alert(`Число по середине: ${(Math.floor((number%100)/10))}`)

// let number=369;

// let n1 = Math.trunc(number/100);
// let n2 = Math.trunc(number%100/10);
// let n3 = number%10;

// console.log(n1);
// console.log(n2);
// console.log(n3);

//9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
// let number=12345;

// let n1 = Math.trunc(number/10000);
// let n2 = Math.trunc(number%10000/1000);
// let n3 = Math.floor(number%1000/100);
// let n4 = Math.trunc(number%100/10);
// let n5 = number%10;

// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
// console.log(n5);
// console.log(String(n5)+n1+n2+n3+n4);
// console.log(String(n5)+String(n1)+String(n2)+String(n3)+String(n4));

// let minNum = 5;
// let maxNum = 100;

// console.log(Math.round(Math.random()*(maxNum-minNum)+minNum))


// console.log(Math.PI.toFixed(2))

// console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51), Math.min(15, 11, 16, 12, 51, 12, 13, 51))

// let x = 15;
// let y = 0;
// console.log(Math.round(Math.random()*x));

// let x = 100;
// let y = 0;
// console.log(Math.random()*x).toFixed(2);

// let n = 0.6+0.7;
// console.log(n.toFixed(1));