// Write a recursive function called flatten
// which accepts an array of arrays and returns a new array with all values flattened.

function flatten(array) {
    if (array.length === 0) return [];

    return [
        ...(Array.isArray(array[0]) ? flatten(array[0]) : [array[0]]),
        ...flatten(array.slice(1)),
    ];
}

// function flatten(array) {
//     let resultArr = [];

//     for (let i = 0; i < array.length; i++) {
//         const el = array[i];
//         if (Array.isArray(el)) {
//             resultArr = resultArr.concat(flatten(el));
//         } else {
//             resultArr.push(el);
//         }
//     }

//     return resultArr;
// }

const expect = require("../expect");

expect(flatten([1, 2, 3, [4, 5]])).toBe([1, 2, 3, 4, 5]);
expect(flatten([1, [2, [3, 4], [[5]]]])).toBe([1, 2, 3, 4, 5]);
expect(flatten([[1], [2], [3]])).toBe([1, 2, 3]);
expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toBe([1, 2, 3]);