/*Создайте класс для описания машины. С параметрами. Вес, цвет, скорость марка и т.д. Чем больше, чем лучше. 
Создайте также различные методы. Например, метод для получения информации сколько километров пройдёт машина с такой скоростью за переданное её время и т.д. 
Создайте несколько объектов разных машин и измените им некоторые параметры и выведите результаты. */

class Automobile {
  constructor(model, color, weight, speed, year, engineCapacity) {
    this.model = model;
    this.color = color;
    this.weight = weight;
    this.speed = speed;
    this.year = year;
    this.engineCapacity = engineCapacity;
  }
  getInfo() {
    return `Модель машины: ${this.model} 
    Цвет: ${this.color}
    Вес: ${this.weight}
    Максимальная скорость: ${this.speed}
    Год выпуска: ${this.year}
    Объем двигателя: ${this.engineCapacity}`;
  }
  getSpeed(time) {
    return `При максимальной скорости ${this.model} за ${time} минут проедет ${
      this.speed * (time / 60)
    } км`;
  }
}

const autos = [
  new Automobile("Hyundai Sonata", "Серый", 1980, 210, 2023, 2.5),
  new Automobile("Lada Priora", "Черный", 1163, 183, 2023, 1.6),
  new Automobile("Toyota Corolla", "Белый", 1370, 195, 2023, 1.6),
];

for (let i = 0; i <= autos.length - 1; i++) {
  console.log(autos[i].getInfo());
}

for (let i = 0; i <= autos.length - 1; i++) {
  console.log(autos[i].getSpeed(60));
}
