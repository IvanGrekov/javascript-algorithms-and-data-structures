// Collecting all odd values:

function getOddValues(arr) {
    let result = [];

    if (arr.length === 0) {
        return result;
    }

    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = result.concat(getOddValues(arr.slice(1)));

    return result;
}

const expect = require("../expect");

expect(getOddValues([1, 2, 3, 4, 5])).toBe([1, 3, 5]);
expect(getOddValues([2, 4, 6, 8])).toBe([]);
expect(getOddValues([1, 3, 5, 7])).toBe([1, 3, 5, 7]);
expect(getOddValues([])).toBe([]);