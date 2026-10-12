// It's a combination of 2 things - splitting, sorting and merging.
// Exploits the fact that arrays of 0 or 1 element are already sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 element, then merging them back together in sorted order.
// It's divide and conquer approach.

// Merging 2 sorted arrays:
// Given 2 sorted arrays. This function should create a new array which is also sorted.
// And consists of all of the elements from the input arrays.
// Function should run in O(n + m) time and O(n + m) space, and should not modify the input arrays.

function mergeSortedArrays(arr1, arr2, cb = (a, b) => a - b) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
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

    if (i < arr1.length) result.push(...arr1.slice(i));

    if (j < arr2.length) result.push(...arr2.slice(j));

    return result;
}

const expect = require('../expect');

// numbers
expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toBe([1, 2, 3, 4, 5, 6]);
expect(mergeSortedArrays([3, 4, 7, 9], [1, 2, 8, 10])).toBe([1, 2, 3, 4, 7, 8, 9, 10]);
expect(mergeSortedArrays([], [1])).toBe([1]);
expect(mergeSortedArrays([1], [])).toBe([1]);
expect(mergeSortedArrays([], [])).toBe([]);
expect(mergeSortedArrays([6, 3, 1], [5, 2, 0], (a, b) => b - a)).toBe([6, 5, 3, 2, 1, 0]);

// strings
const comparator = (a, b) => a.localeCompare(b);
expect(mergeSortedArrays(['a', 'c', 'e'], ['b', 'd', 'f'], comparator)).toBe(['a', 'b', 'c', 'd', 'e', 'f']);
expect(mergeSortedArrays(['b'], ['a', 'd'], comparator)).toBe(['a', 'b', 'd']);
expect(mergeSortedArrays(['apple', 'banana'], ['apricot', 'blueberry'], comparator)).toBe(['apple', 'apricot', 'banana', 'blueberry']);