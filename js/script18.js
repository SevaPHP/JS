'use strict';

const btns = document.querySelectorAll('button');

console.log(btns);

console.log(btns[0].classList.length); //Сколько классов у кнопки
console.log(btns[0].classList.item(0)); //Получает имя класса. blue
console.log(btns[1].classList.add('red', 'asdasd'));//Добавляет класс 'red'
console.log(btns[0].classList.remove('blue')); //Удаляет класс
console.log(btns[0].classList.toggle('blue'));//Переключает класы, если класс есть - убирает - если класса нет добавляет

//ПРовераем наличие класса
// if (btns[1].classList.contains('red')) {
//     //Если класс будет добавляем 
//     console.log('red');
// }   

btns[0].addEventListener('click',() => { //При клике на первую кнопку срабатывает if
    if(!btns[1].classList.contains('red')) {

        btns[1].classList.add('red', 'asdasd');
        btns[7].classList.add('red', 'asdasd');
        
    } else {

        btns[1].classList.remove('red', 'asdasd');
        btns[7].classList.remove('red', 'asdasd');

    }

});

//toggle

btns[2].addEventListener('click',() => { //При клике на первую кнопку срабатывает if
    btns[2].classList.toggle('red' );
});


const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    console.dir(event.target);
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Вы кликнули в кнопку');
    }
});
 
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);