"use strict";

 let a = 13;

console.log("hello world");
//Переменные 
let number = 5; //let - означает, что наша переменная изменяемая.

const leftBorderWidth = 1;//const - постаянная переменная. 

//var устаревший вариант. Вызов работает до объявление переменной. Лучше использовать let 
console.log(numberOne);
var numberOne = 1;


//Классификация типов данных (существуют 8 типов данных ПРОСТЫЕ - КОМПЛЕКСНЫЕ)
let numbeR = 4.6;
const persone = `Alex ${numbeR}`; //string
const bool = false;

let und;
console.log('und'); //undefined

//Тип данных объект
const obj = {
    name: "John", //Ключ - name , значение - John
    age: 25,
    isMarried: false
};
console.log(obj.name); //Объект - ключевая единица джава скрипта

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]); //Ключи заданы по умолчанию

 //7. Простое общение с пользователем

 /*alert('Ошибка');
 const result = confirm("are you here?");
 console.log(result);
 const resultTwo = +prompt("how old are you?", "18");
 console.log(typeof(resultTwo));*/

/*const answers = [];

answers['name'] = prompt('Как ваше имя?','');
answers['sername'] = prompt('Как ваша фамилия?','');
answers['age'] = +prompt('Сколько Вам лет?','');

console.log(answers);
//Преобразовать массив в объект
let abc = Object.setPrototypeOf(answers, Object.prototype);
console.log(abc.name);
document.write(answers['name'], answers['sername'],answers['age']);
*/
//8. Интерполяция (ES6)
const category  = 'toys';
console.log(`hello world ${category}`);

//9. Операторы в JS
console.log('arr' + " - object");
console.log(4 + "5"); // 45
console.log(4 + +"5"); // 9 Плюсик перед 5 назыывается "унарный плюс" он превращает строку в число

let incr = 10,
    decr = 10;

console.log(incr++); //10
console.log(decr--); //10

console.log(++incr); //11
console.log(--decr); //9




