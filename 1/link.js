'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


function copy1(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a : 2,
    b : 5,
    c: {
        x : 7,
        y : 4
    }
};

// const newNumbers = copy1(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);





const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadadsdasdad';

console.log(newArray);
console.log(oldArray);



