function addNewField(selector) {
  // Получаем форму с помощью селектора
  const form = document.querySelector(selector);

  // Создаем новый элемент поля ввода
  const newField = document.createElement("input");
  newField.type = "text";
  newField.name = "newField";
  newField.placeholder = "Введите значение";

  // Добавляем новое поле в форму
  form.appendChild(newField);
}
