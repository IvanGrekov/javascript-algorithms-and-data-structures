// productOfArray

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(array) {
    if (array.length === 0) return 1;

    const [firstNum, ...rest] = array;

    return firstNum * productOfArray(rest);
}

const expect = require("../expect");

expect(productOfArray([1, 2, 3])).toBe(6);
expect(productOfArray([1, 2, 3, 10])).toBe(60);
