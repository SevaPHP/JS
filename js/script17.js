'use strict';

// touchstart - коснулись пальчиком событие выполнилось
// touchmove - движение пальца
// touchend - как только палец убрали
// toucheenter - как только ведем пальцем по экрану
// touchleave -убрали палец
// touchcancel - точно соприкосновения больше не регестрируется на повернхности


document.addEventListener('DOMContentLoaded', () => {


    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });




});