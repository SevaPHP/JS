"use strict";
let num = 20;
function ShowFirstMessage(text) {
     console.log(text);
     num = 10;
}

ShowFirstMessage("hello worldf"); 
console.log(num);

function calc(a, b) {
     return (a + b);
}
console.log(calc(1, 4));

function ret() {
     let num = 50;

     return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
     console.log("function expression");
}

logger();

const calcs = (a, b) => {
     console.log('1');
     return a + b;
}

calcs(1, 3);