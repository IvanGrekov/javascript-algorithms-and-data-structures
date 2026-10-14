// Pivot Helper

// Helper should determine an element as "pivot"
// It should rearrange elements in the array: smaller values to the left of the pivot; larger values to the right of the pivot.
// The order of elements within the left and right partitions does not matter.
// The helper should do this in place, it should not create a new array.
// It should return the index where the pivot element is finally placed.
// It accepts the array, start index, end index and callback function for comparison.


function pivotHelper(
    arr,
    cb = (a, b) => a - b,
    start = 0,
    end = arr.length - 1,
) {
    if (!arr.length) return 0;

    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (cb(arr[start], arr[i]) > 0) {
            ++swapIdx;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

    return swapIdx;
}

const expect = require('../expect');

const arr1 = [5, 2, 1, 8, 4, 7, 6, 3];
expect(pivotHelper(arr1)).toBe(4);
expect(arr1).toBe([3, 2, 1, 4, 5, 7, 6, 8]);

const arr2 = [10, 80, 30, 90, 40, 50, 70];
expect(pivotHelper(arr2)).toBe(0);
expect(arr2).toBe([10, 80, 30, 90, 40, 50, 70]);

const arr3 = [3, 2, 1];
expect(pivotHelper(arr3)).toBe(2);
expect(arr3).toBe([1, 2, 3]);

const arr4 = [1, 2, 3];
expect(pivotHelper(arr4)).toBe(0);
expect(arr4).toBe([1, 2, 3]);

const arr5 = [1];
expect(pivotHelper(arr5)).toBe(0);
expect(arr5).toBe([1]);

const arr6 = [];
expect(pivotHelper(arr6)).toBe(0);
expect(arr6).toBe([]);

const arr7 = [4, 8, 2, 1, 5, 7, 6, 3];
expect(pivotHelper(arr7)).toBe(3);
expect(arr7).toBe([3, 2, 1, 4, 5, 7, 6, 8]);
