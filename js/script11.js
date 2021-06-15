'use strict';

const arr = [2,1,3,6,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.pop();
arr.push(10);

console.log(arr);

const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));