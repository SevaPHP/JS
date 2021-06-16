"use strict";

let str = "some";

let strobj = new String(str);

console.log(typeof(str));
console.log(typeof(strobj));

console.dir([1,2,3]);

console.dir(2);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const john = {
//     health:100
// };

// john.__proto__ = soldier; //Старый вариант
// Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);
console.log(john);
console.log(john.armor);
john.sayHello();

