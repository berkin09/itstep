// 1. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'. (функция split)
// let date = '2025-12-31';
// let dateSplit = date.split('-');
// let newDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
// console.log(newDate);

// 2. Написать функцию, которая спрашивает у пользователя строку и выводит её задам наперёд.
// let inputStr = prompt('Введите строку');
// let arr = inputStr.split('');
// function str() {
// for(let i = arr.length-1; i>=0; i--) {
//     document.write(arr[i]);
// }
// }
// str();

// 3. Написать функцию, которая проверяет есть ли в заданной строке заданный символ.
// const str = `Эта книга адресована всем, кто изучает русский язык. Но состоит она не из правил, упражнений и учебных текстов. Для этого созданы другие замечательные учебники.
// У этой книги совсем иная задача. Она поможет вам научиться не только разговаривать, но и размышлять по-русски. Книга, которую вы держите в руках, составлена из афоризмов и размышлений великих мыслителей, писателей, поэтов, философов и общественных деятелей различных эпох. Их мысли - о тех вопросах, которые не перестают волновать человечество.
// Вы можете соглашаться или не соглашаться с тем, что прочитаете в этой книге. Возможно, вам покажется, что какие-то мысли уже устарели. Но вы должны обязательно подумать и обосновать, почему вы так считаете.`;
// let strSplit = str.split('');
// let inputSymbol = prompt('Введите символ и мы будем его искать среди строк');
// let sum = 0;
// function searchSymbol() {
//     for(let i = 0; i<=strSplit.length-1; i++) {
//      if(inputSymbol == strSplit[i]) {
//         sum = sum + 1;
//      }
//  }
//  return sum;
// }
// let result = searchSymbol();
// document.write(result)

// 4. Написать функцию, которая убирает ненужные пробелы в строке в начале и в конце. Строка берётся из инпута.
// let inputStr = prompt('Введите строку');
// function deleteSpace () {
//     return inputStr.trim();
// }
// let newStr = deleteSpace();
// document.write(newStr);