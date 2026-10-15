// Time Complexity
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n^2)
//      - picking the middle element as the pivot avoids the worst case
//      for already-sorted (or reverse-sorted) arrays, but a worst case
//      is still possible for a specially crafted input.

// Space Complexity: O(log n)
function pivotHelper(
    arr,
    cb = (a, b) => a - b,
    start = 0,
    end = arr.length - 1,
) {
    if (!arr.length) return 0;

    // Move the middle element to the start, so the rest of the
    // partitioning logic can stay the same as the "first element" version.
    const middleIdx = start + Math.floor((end - start) / 2);
    [arr[start], arr[middleIdx]] = [arr[middleIdx], arr[start]];

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

// Sorted (and reverse-sorted) arrays no longer hit the O(n^2) worst case,
// because the middle element is a much better pivot choice for these inputs.
expect(quickSort([1, 2, 3, 4, 5, 6, 7, 8])).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
expect(quickSort([8, 7, 6, 5, 4, 3, 2, 1])).toBe([1, 2, 3, 4, 5, 6, 7, 8]);
