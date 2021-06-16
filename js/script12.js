'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b); //10
console.log(a); //5

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copys(main) {
    let objCopy = {};

    let key;

    for(key in main) {
        objCopy[key] = main[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        e: 4,
        s: 5
    }
};

const seva = copys(numbers);


seva.a = 155;


const add = {
    d: "новый обьект",
    s: 12
};

console.log('seva');
console.log(Object.assign(seva, add));

const seva2 = Object.assign({}, add);
seva2.d = "замена";
console.log(seva2);

//копия массива

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();
newArray[2] = "asdasdas";
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [3, 5, 3];

log(...num);

const array = ["a", "b"];

const newAattay = [...array];

console.log(newAattay);

const q = {
    one: 1,
    two: 2
};

const newObjj = {...q};

newObjj.one = 1555;

console.log(newObjj);