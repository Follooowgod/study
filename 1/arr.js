'use strict';

const arr = [ 1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr.length);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


arr.pop();
console.log(arr);
arr.push (10);
console.log(arr);

// let counter = 0;

for (let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
    // counter++;
}

for (let value of arr) {
    console.log(value);
}
// console.log(counter);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));