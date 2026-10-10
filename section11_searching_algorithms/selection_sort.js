function selectionSort(arr, getIsNewSelected = (a, b) => a - b) {
    for (let i = 0; i < arr.length - 1; i++) {
        let selectedIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            const isNewSelected = getIsNewSelected(arr[selectedIndex], arr[j]);

            if (isNewSelected > 0) {
                selectedIndex = j;
            }
        }

        if (selectedIndex === i) continue;

        [arr[i], arr[selectedIndex]] = [arr[selectedIndex], arr[i]];
    }
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

