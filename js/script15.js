"use strict";

//Превратить в строку
console.log(typeof(String(null))); //string
console.log(typeof(String(155))); //string

//Превратить в строку через конкотинацию 
console.log(typeof(5 + '')); //string


const num = 5;
console.log("www.asd.com/catalog/" + num);

const fontSizw = 25 + 'px';

//Превращаем в число
console.log(typeof(Number('asdad'))); //number

console.log(typeof(+ '5')); //number

console.log(typeof(parseInt("15px", 10))); //number

//let answ = +prompt("Hello", "");

//Превращаем в булин

//0, '', null, undefined, NaN; - false

let switcher = null;

if (switcher) {
    console.log('Working....');
} 
switcher = 1;

if (switcher) {
    console.log('Working....');
} 


console.log(typeof(Boolean('4'))); //boolean

console.log(typeof(!!"44444")); //boolean