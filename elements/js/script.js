'use strict';

const box = document.getElementById('box'); //Передача по id;
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns); //Получаем массив кнопок ВНИМАНИЕ!!!!
console.log(btns[0]);//получаем первую кнопку!!!!

const circles = document.getElementsByClassName('circle');
console.log(circles);

// Приемущество querySelectorAll и querySelector перед всеми в том , что у них есть метод foreach
const hearts = document.querySelectorAll('.heart'); //обязательно селектор вызвать так как в css. так как это общий вызов
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //Приходит первый селектор!
console.log(oneHeart);

