// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(arr) {
    if (!arr?.length || arr[arr.length - 1] === 1) {
        return 0;
    }

    if (arr[0] === 0) {
        return arr.length;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start !== end) {
        const middle = Math.floor((start + end) / 2);

        if (arr[middle] === 1) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return arr.length - start;
}

const expect = require("../expect");

expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2);
expect(countZeroes([1, 0, 0, 0, 0])).toBe(4);
expect(countZeroes([0, 0, 0])).toBe(3);
expect(countZeroes([1, 1, 1, 1])).toBe(0);
expect(countZeroes([1, 1, 0, 0, 0, 0, 0], 2)).toBe(5);
expect(countZeroes([])).toBe(0);
expect(countZeroes([0])).toBe(1);
expect(countZeroes([1])).toBe(0);
expect(countZeroes([1, 0])).toBe(1);
expect(countZeroes([1, 1, 0])).toBe(1);
expect(countZeroes([1, 1, 1, 0])).toBe(1);
expect(countZeroes([1, 1, 1, 1, 0])).toBe(1);
expect(countZeroes([1, 0, 0])).toBe(2);
expect(countZeroes([1, 1, 0, 0])).toBe(2);
expect(countZeroes([1, 1, 1, 0, 0])).toBe(2);
expect(countZeroes([1, 1, 1, 1, 1, 0, 0, 0])).toBe(3);
expect(countZeroes([1, 1, 1, 1, 1, 1, 0, 0])).toBe(2);
expect(countZeroes([1, 1, 1, 1, 1, 1, 1, 0])).toBe(1);
expect(countZeroes([1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
expect(countZeroes([0, 0, 0, 0, 0, 0, 0])).toBe(7);