// 1.	Рассчитать значение n в m мощности
function power(n,m) {
    if (m == 0) {
        return 1;
    }
    if (m == 1) {
        return n;
    }
    return n * power(n, m-1);
}
console.log(power(4,4))

// 2.	Найти наибольший общий делитель двух положительных чисел.
function divider (a,b) {
    if (b === 0) {
        return a
    } else {
        return divider(b, a % b);
    }
}
console.log(divider(36, 18))

/* 3. Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн. 
Создайте объект city2 через нотацию {name: "ГородM", population: 10000000000}. 
Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов 
Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN, population=10000000». Для второго города будет строка со своими значениями.
*/
var city1 = {
    name: "ГородN",
    population: 10000000,
    getName: function() {
        return this.name;
    },
    exportStr: function() {
        return "name=" + this.name + ", population=" + this.population;
    }
};

var city2 = {
    name: "ГородM",
    population: 10000000000,
    getName: function() {
        return this.name;
    },
    exportStr: function() {
        return "name=" + this.name + ", population=" + this.population;
    }
};

console.log(city1.getName());
console.log(city1.exportStr());

console.log(city2.getName());
console.log(city2.exportStr());