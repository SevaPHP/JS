"use strict";

const str = "test";
const arr = [1,2,3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = "some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("-q")); //-1 значит нету такой подстроки

const logg = "hello world";

console.log(logg.slice(6, 11)); //6 начало строки , 10 конец строки

console.log(logg.substring(6, 11));

console.log(logg.substr(6,4));

console.log(Math.round(12.2));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));
