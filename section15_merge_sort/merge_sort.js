// Break up the array into halves until you have arrays that are empty or have one element
// Merge those arrays with other sorted arrays until you are back at the full length of input array

// Time complexity: O(n log n)
// Space complexity: O(n)
function mergeSortedArrays(arr1, arr2, cb) {
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

function mergeSort(array, cb = (a, b) => a - b) {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle), cb);
    const right = mergeSort(array.slice(middle), cb);

    return mergeSortedArrays(left, right, cb);
}

const expect = require('../expect');

expect(mergeSort([3, 5, 7, 1, 3, 8, 9, 4, 11, 56, 23, 45, 38])).toBe([1, 3, 3, 4, 5, 7, 8, 9, 11, 23, 38, 45, 56]);
expect(mergeSort([])).toBe([]);
expect(mergeSort([1])).toBe([1]);
expect(mergeSort([2, 1])).toBe([1, 2]);
expect(mergeSort([5, 3, 8, 4, 2])).toBe([2, 3, 4, 5, 8]);
expect(mergeSort([11, 7, 23, 4])).toBe([4, 7, 11, 23]);
expect(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Why we get O(n log n) time complexity:
// O(log n) – decompositions
// O(n) – n comparisons during merging inside sorting process