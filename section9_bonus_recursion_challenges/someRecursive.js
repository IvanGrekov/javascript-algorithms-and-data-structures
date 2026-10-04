// Write a recursive function called someRecursive
// which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

// function someRecursive(arr, cb) {
//     if (arr.length === 0) return false;
//     return cb(arr[0]) || someRecursive(arr.slice(1), cb);
// }

function someRecursive(arr, cb) {
    if (arr.length === 0) return false;
    if (cb(arr[0])) return true;
    return someRecursive(arr.slice(1), cb);
}

const isOdd = val => val % 2 !== 0;
const expect = require("../expect");

// expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
expect(someRecursive([4, 6, 8], val => val > 10)).toBe(false);