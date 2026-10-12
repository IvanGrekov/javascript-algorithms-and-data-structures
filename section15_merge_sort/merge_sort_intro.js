// It's a combination of 2 things - splitting, sorting and merging.
// Exploits the fact that arrays of 0 or 1 element are already sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 element, then merging them back together in sorted order.
// It's divide and conquer approach.

// Merging 2 sorted arrays:
// Given 2 sorted arrays. This function should create a new array which is also sorted.
// And consists of all of the elements from the input arrays.
// Function should run in O(n + m) time and O(n + m) space, and should not modify the input arrays.

function mergeSortedArrays(arr1, arr2, cb = (a, b) => a - b) {
    if (!arr1.length) return [...arr2];
    if (!arr2.length) return [...arr1];

    const result = [];
    let i = 0;
    let j = 0;

    while (typeof arr1[i] !== "undefined" || typeof arr2[j] !== "undefined") {
        if (i >= arr1.length) {
            result.push(...arr2.slice(j));
            break;
        }

        if (j >= arr2.length) {
            result.push(...arr1.slice(i));
            break;
        }

        const compare = cb(arr1[i], arr2[j]);
        if (compare > 0) {
            result.push(arr2[j]);
            ++j;
        } else if (compare < 0) {
            result.push(arr1[i]);
            ++i;
        } else {
            result.push(arr1[i], arr2[j]);
            ++i;
            ++j;
        }
    }

    return result;
}

const expect = require('../expect');

expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toBe([1, 2, 3, 4, 5, 6]);

expect(mergeSortedArrays([3, 4, 7, 9], [1, 2, 8, 10])).toBe([1, 2, 3, 4, 7, 8, 9, 10]);

expect(mergeSortedArrays([], [1])).toBe([1]);

expect(mergeSortedArrays([1], [])).toBe([1]);

expect(mergeSortedArrays([], [])).toBe([]);