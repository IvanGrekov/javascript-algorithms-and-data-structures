// Complexity: O(n^2) in the worst and average case, O(n) in the best case (when the array is already/almost sorted)
function bubbleSort(arr, cb = (a, b) => a - b) {
    for (let i = arr.length - 1; i > 0; i--) {
        let swapped = false;

        for (let j = 0; j < i; j++) {
            if (cb(arr[j], arr[j + 1]) <= 0) {
                continue;
            } else {
                swapped = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

        if (!swapped) break;
    }
}

const expect = require('../expect');

const arr1 = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
bubbleSort(arr1);
expect(arr1).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);

const almostSortedArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 11, 17, 24, 28, 48, 90, 120, 150];
bubbleSort(almostSortedArr2);
expect(almostSortedArr2).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]);