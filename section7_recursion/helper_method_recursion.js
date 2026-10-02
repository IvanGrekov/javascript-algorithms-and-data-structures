// Collecting all odd values:

// function getOddValues(arr) {
//     if (arr.length === 0) return [];
//     if (arr[0] % 2 !== 0) return [arr[0], ...getOddValues(arr.slice(1))];
//     return [...getOddValues(arr.slice(1))];
// }

function getOddValues(arr) {
    const result = [];

    const helper = (input) => {
        if (input.length === 0) return;

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        helper(input.slice(1));
    }

    helper(arr);

    return result;
}

const expect = require("../expect");

expect(getOddValues([1, 2, 3, 4, 5])).toBe([1, 3, 5]);
expect(getOddValues([2, 4, 6, 8])).toBe([]);
expect(getOddValues([1, 3, 5, 7])).toBe([1, 3, 5, 7]);
expect(getOddValues([])).toBe([]);