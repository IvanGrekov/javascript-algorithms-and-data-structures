// Given a sorted array and a number,
// write a function called sortedFrequency that counts the occurrences of the number in the array

// Time Complexity - O(log n)
function sortedFrequency(arr, n) {
    if (
        !arr?.length
        || arr[0] > n
        || arr[arr.length - 1] < n
    ) {
        return -1;
    }

    const firstIndex = findFirst(arr, n);
    if (firstIndex === -1) {
        return -1;
    }

    const lastIndex = findLast(arr, n);

    return lastIndex - firstIndex + 1;
}

function findFirst(arr, n) {
    let start = 0;
    let end = arr.length - 1;

    while (start !== end) {
        const middle = Math.floor((start + end) / 2);
        const middleEl = arr[middle];

        if (middleEl < n) {
            start = middle + 1;
        } else if (middleEl > n) {
            end = middle - 1;
        } else {
            end = middle;
        }
    }

    return arr[start] === n ? start : -1;
}

function findLast(arr, n) {
    let start = 0;
    let end = arr.length - 1;

    while (start !== end) {
        const middle = Math.floor((start + end) / 2);
        const middleEl = arr[middle];

        if (middleEl <= n) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return arr[end] === n ? end : end - 1;
}

const expect = require("../expect");

expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);
expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1);
expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2);
expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1);
expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 5], 4)).toBe(-1);
expect(sortedFrequency([0, 0, 2, 2, 2, 2, 3, 5], 1)).toBe(-1);
expect(sortedFrequency([], 1)).toBe(-1);
expect(sortedFrequency([5], 5)).toBe(1);
expect(sortedFrequency([5], 3)).toBe(-1);
expect(sortedFrequency([1, 2, 3, 4, 5], 1)).toBe(1);
expect(sortedFrequency([1, 2, 3, 4, 5], 5)).toBe(1);
expect(sortedFrequency([1, 1, 1, 1], 1)).toBe(4);
expect(sortedFrequency([1, 2, 2, 2, 3], 2)).toBe(3);
expect(sortedFrequency([1, 1, 2, 3, 3], 3)).toBe(2);
expect(sortedFrequency([1, 1, 1, 2, 2, 3], 1)).toBe(3);
expect(sortedFrequency([1, 2, 3, 3, 3, 3, 4], 3)).toBe(4);
expect(sortedFrequency([0, 0, 0, 1, 1, 2, 2], 0)).toBe(3);
expect(sortedFrequency([0, 0, 0, 1, 1, 2, 2], 2)).toBe(2);
expect(sortedFrequency([1, 2, 2, 4, 4, 4, 5], 4)).toBe(3);