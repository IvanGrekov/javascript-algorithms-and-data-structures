// Start by picking the second element in the array
// Now compare the second element with the one before it and swap them if necessary
// Continue to the next element and if it is in the correct order, iterate through the sorted portion
// top place the element in the correct place
// Repeat until the array is sorted

function insertionSort(arr, comparator = (a, b) => a - b) {
    for (let i = 1; i < arr.length; i++) {
        const a = arr[i];
        arr.splice(i, 1);

        for (let j = i - 1; j >= 0; j--) {
            const b = arr[j];
            const result = comparator(a, b);

            if (result >= 0) {
                arr.splice(j + 1, 0, a);
                break;
            } else if (j === 0) {
                arr.splice(j, 0, a);
            }
        }
    }

    return arr;
}

const expect = require('../expect');

const arr1 = [150, 2, 7, 48];
expect(insertionSort(arr1)).toBe([2, 7, 48, 150]);

const arr2 = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
expect(insertionSort(arr2)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

const almostSortedArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 11, 17, 24, 28, 48, 90, 120, 150];
expect(insertionSort(almostSortedArr3)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

expect(insertionSort([4, 20, 12, 10, 7, 9])).toBe([4, 7, 9, 10, 12, 20]);

expect(insertionSort([0, -10, 7, 4])).toBe([-10, 0, 4, 7]);

expect(insertionSort([1, 2, 3])).toBe([1, 2, 3]);

expect(insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])).toBe([2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]);
