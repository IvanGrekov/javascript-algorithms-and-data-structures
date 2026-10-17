// Time Complexity
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n^2)

// Space Complexity: O(log n)
function pivotHelper(
    arr,
    cb,
    start,
    end,
) {
    const middle = start + Math.floor((end - start) / 2);
    [arr[start], arr[middle]] = [arr[middle], arr[start]];

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

function quickSort(
    arr,
    cb = (a, b) => a - b,
    start = 0,
    end = arr.length - 1,
) {
    if (end - start < 1) return arr;
    const swapIdx = pivotHelper(arr, cb, start, end);
    quickSort(arr, cb, start, swapIdx - 1);
    quickSort(arr, cb, swapIdx + 1, end);

    return arr;
}

const expect = require('../expect');

expect(quickSort([5, 2, 1, 8, 4, 7, 6, 3])).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
expect(quickSort([3, 1, 2])).toBe([1, 2, 3]);
expect(quickSort([10, 80, 30, 90, 40, 50, 70])).toBe([10, 30, 40, 50, 70, 80, 90]);
expect(quickSort([4, 2, 5, 1, 3])).toBe([1, 2, 3, 4, 5]);
expect(quickSort([9, 7, 5, 3, 1])).toBe([1, 3, 5, 7, 9]);
expect(quickSort([4, 8, 2, 1, 5, 7, 6, 3])).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
expect(quickSort([1])).toBe([1]);
expect(quickSort([])).toBe([]);

// Why we get O(n log n) time complexity:
// Time Complexity
// Best: O(n log n)
//      – log n: decompositions;
//      - n: comparisons per decomposition

// Why we get O(n^2) for the worst case:
// If array is sorted and we pivot always the 1st element, each decomposition will have n-1 comparisons, leading to O(n^2) time complexity.
