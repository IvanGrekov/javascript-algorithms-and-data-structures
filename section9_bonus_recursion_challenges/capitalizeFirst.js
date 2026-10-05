// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
    let result = [];

    const inner = (inputArr) => {
        if (inputArr.length === 0) return;

        const [string, ...rest] = inputArr;
        result.push(string.slice(0, 1).toUpperCase() + string.slice(1))

        inner(rest);
    };
    inner(array);

    return result;
}

const expect = require("../expect");

expect(capitalizeFirst(['car', 'taco', 'banana'])).toBe(['Car', 'Taco', 'Banana']);