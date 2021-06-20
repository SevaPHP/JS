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

//box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; //заменить инлайн стили

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// } 

hearts.forEach( item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div'); //создали тег див
 const text = document.createTextNode('Тут был я');
console.log(div);

 div.classList.add('black'); //Добавляем стиль в тег див
 //добавляем тег див в штмл
 //document.body.append(div); //Берем тег бади и добавляем тег див в самый конец.

 //Как вставить в определеный тег
 const wrapper = document.querySelector('.wrapper');

 //wrapper.append(div); // в конец вставить

 //wrapper.prepend(div);//В начало вставить

 //hearts[0].before(div); //Метод before вставляет элемент перед
 hearts[0].after(div); //Метод after вставляет элемент после

 btns[2].remove(); //Удаление элемента
    //замена
 //box.replaceWith(circles[1]);

 //btns[0].replaceWith(btns[3]);

//как добавлять html код в элементы? или текст

div.innerHTML = "<h1>Hello World</h1>"; //вставляет тексти html текстуру

btns[0].textContent = "Только текст";

div.insertAdjacentHTML("beforebegin", '<h2>312</h2>');//Вставляет html код перед
div.insertAdjacentHTML("afterend", '<h2>312</h2>');//Вставляет html код После


