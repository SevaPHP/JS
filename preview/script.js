'use strict';

const btn = document.querySelector('button');
const btn2 = document.querySelector('#btn2');  
const btns = document.querySelectorAll('button');  
//Проблемный метод , его уже не используют. Старый вариант
        // btn.onclick = function () {
        //     alert('Click');
        // }
             let a = 0;
            btns.forEach( item => {
                     
                item.addEventListener('click',(e) => {
                   console.log(`Меня вызвали из btnns `);

                }, {once:true});      
            });
        
btn.addEventListener('click',() => {
    alert('Меня вызвали из btn');
});        

let i = 0;

//Обработчик событий если нажат то больше не используется
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn2.removeEventListener('click', deleteElement);
    }
}

btn2.addEventListener('click', deleteElement);