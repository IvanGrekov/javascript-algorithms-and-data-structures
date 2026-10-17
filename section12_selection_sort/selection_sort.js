// Start from the beginning and move to the end
// On each nested iteration look for min value
// Each new nested iteration start after already sorted values in the beginning

// Complexity: O(n^2)
function selectionSort(arr, cb = (a, b) => a - b) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (cb(arr[minIdx], arr[j]) > 0) {
                minIdx = j;
            }
        }

        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }

    return arr;
}

const expect = require('../expect');

const arr1 = [150, 2, 7, 48];
selectionSort(arr1);
expect(arr1).toBe([2, 7, 48, 150]);

const arr2 = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
selectionSort(arr2);
expect(arr2).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

const almostSortedArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 11, 17, 24, 28, 48, 90, 120, 150];
selectionSort(almostSortedArr3);
expect(almostSortedArr3).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

