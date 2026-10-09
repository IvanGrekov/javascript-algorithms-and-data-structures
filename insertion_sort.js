function insertionSort(arr, cb = (a, b) => a - b) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && cb(arr[j], current) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

const expect = require('./expect');

expect(insertionSort([])).toBe([]);
expect(insertionSort([5])).toBe([5]);
expect(insertionSort([2, 1])).toBe([1, 2]);
expect(insertionSort([5, 3, 4, 1, 2])).toBe([1, 2, 3, 4, 5]);
expect(insertionSort([150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120])).toBe(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 17, 24, 28, 48, 90, 120, 150]
);
expect(insertionSort([1, 2, 3, 4, 5])).toBe([1, 2, 3, 4, 5]);
expect(insertionSort([5, 4, 3, 2, 1])).toBe([1, 2, 3, 4, 5]);
expect(insertionSort([3, 3, 1, 2, 2])).toBe([1, 2, 2, 3, 3]);
expect(insertionSort(['b', 'a', 'c'], (a, b) => a.localeCompare(b))).toBe(['a', 'b', 'c']);
expect(insertionSort([1, 2, 3, 4, 5], (a, b) => b - a)).toBe([5, 4, 3, 2, 1]);
