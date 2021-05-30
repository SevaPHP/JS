"use strict"

if (4 == 9) {
    console.log('OK!');
}else{
    console.log('Error');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('много')
} else {
    console.log('Ok!');
}

//Тернарный оператор

(num === 50) ? console.log('Ok!') : console.log('Error!');

const nums = 50;

switch (nums) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
            console.log('Неверно');
            break;
    case 50:
            console.log(nums);
            break;
    default:
                console.log('Не один из вариантов не подошел');
                break;    
};