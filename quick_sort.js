function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }

    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);

        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
}

const expect = require('./expect');

expect(quickSort([4, 6, 1, 8, 3, 9, 2, 10, 5, 7])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
expect(quickSort([150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120])).toBe(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]
);
expect(quickSort([])).toBe([]);
expect(quickSort([1])).toBe([1]);
expect(quickSort([2, 1])).toBe([1, 2]);
expect(quickSort([5, 5, 5, 5])).toBe([5, 5, 5, 5]);
expect(quickSort([-3, 5, -1, 0, 10, -10])).toBe([-10, -3, -1, 0, 5, 10]);
