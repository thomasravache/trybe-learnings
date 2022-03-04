"use strict";
const myFilter = (array, callback) => {
    const meuArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            meuArray.push(array[i]);
        }
    }
    ;
    return meuArray;
};
console.log(myFilter([1, 2, 3], (item) => item < 3));
console.log(myFilter(['a', 'b', 'c'], (letter) => letter !== 'a'));
