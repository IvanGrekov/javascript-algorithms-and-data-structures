// Start by picking the second element in the array
// Now compare the second element with the one before it and swap them if necessary
// Continue to the next element and if it is in the correct order, iterate through the sorted portion
// top place the element in the correct place
// Repeat until the array is sorted

function insertionSort(arr) {
    const sortedArray = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        const a = arr[i];

        for (let j = sortedArray.length - 1; j >= 0; j--) {
            const b = sortedArray[j];

            if (a > b) {
                sortedArray.splice(j + 1, 0, a);
                break;
            } else if (j === 0) {
                sortedArray.splice(j, 0, a);
            }
        }
    }

    return sortedArray;
}

const expect = require('../expect');

const arr1 = [150, 2, 7, 48];
expect(insertionSort(arr1)).toBe([2, 7, 48, 150]);

const arr2 = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
expect(insertionSort(arr2)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

const almostSortedArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 11, 17, 24, 28, 48, 90, 120, 150];
expect(insertionSort(almostSortedArr3)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);
