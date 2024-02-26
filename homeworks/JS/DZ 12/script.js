/*Создайте класс для описания машины. С параметрами. Вес, цвет, скорость марка и т.д. Чем больше, чем лучше. 
Создайте также различные методы. Например, метод для получения информации сколько километров пройдёт машина с такой скоростью за переданное её время и т.д. 
Создайте несколько объектов разных машин и измените им некоторые параметры и выведите результаты. */

class Automobile {
  constructor(model, color, weight, speed, year, img) {
    this.model = model;
    this.color = color;
    this.weight = weight;
    this.speed = speed;
    this.year = year;
    this.img = img;
  }

  displayHTML() {
    const autoCardHTML = `
          <div class="auto-card">
              <strong>Марка:</strong> ${this.model}<br>
              <strong>Цвет:</strong> ${this.color}<br>
              <strong>Вес:</strong> ${this.weight} кг.<br>
              <strong>Скорость:</strong> ${this.speed}<br>
              <strong>Год:</strong> ${this.year}<br>
              <img class="car-img" src="${this.img}" alt="${this.model}">
          </div>
      `;
    document.write(autoCardHTML);
  }
}

const autos = [
  new Automobile(
    "Hyundai Sonata Hybrid",
    "Серый",
    1586,
    159,
    2023,
    "https://www.hyundai.ru/storage/news/42019-7-22_News_41image.jpg"
  ),
];

for (let i = 0; i < autos.length; i++) {
  autos[i].displayHTML();
}
