// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints: 
// Time Complexity - O(log n)
// Space Complexity - O(1)

function getMiddle(left, right) {
    return Math.floor((left + right) / 2);
}

function binarySearch({
    arr,
    left,
    right,
    num,
}) {
    while (left <= right) {
        const middle = getMiddle(left, right);
        const middleEl = arr[middle];

        if (middleEl === num) return middle;

        if (middleEl > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = getMiddle(left, right);
        const middleEl = arr[middle];

        if (middleEl === num) return middle;
        if (left === right) break;

        const leftEl = arr[left];
        // Left part is sorted
        if (leftEl < middleEl) {
            // Num is in left part
            if (leftEl <= num && num <= middleEl) {
                return binarySearch({
                    arr,
                    num,
                    left,
                    right: middle,
                });
            }

            // Drop left part and try to find right sorted part
            left = middle + 1;
            continue;
        }

        const rightEl = arr[right];
        // Right part is sorted
        if (rightEl > middleEl) {
            // Num is in right part
            if (middleEl <= num && num <= rightEl) {
                return binarySearch({
                    arr,
                    num,
                    left: middle,
                    right,
                });
            }

            // Drop right part and try to find left sorted part
            right = middle - 1;
        }
    }

    return -1;
}

const expect = require("../expect");

expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1);
expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2);
expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);
expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1);
expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1);
expect(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)).toBe(5);
expect(findRotatedIndex([1], 1)).toBe(0);
expect(findRotatedIndex([1], 2)).toBe(-1);
expect(findRotatedIndex([5, 6, 7, 0, 1, 2, 3], 0)).toBe(3);
expect(findRotatedIndex([5, 6, 7, 0, 1, 2, 3], 3)).toBe(6);
expect(findRotatedIndex([5, 6, 7, 0, 1, 2, 3], 5)).toBe(0);
expect(findRotatedIndex([5, 6, 7, 0, 1, 2, 3], 7)).toBe(2);
expect(findRotatedIndex([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
expect(findRotatedIndex([1, 2, 3, 4, 5, 6, 7], 5)).toBe(4);
expect(findRotatedIndex([7, 1, 2, 3, 4, 5, 6], 7)).toBe(0);
expect(findRotatedIndex([2, 3, 4, 5, 6, 7, 1], 1)).toBe(6);
expect(findRotatedIndex([30, 40, 50, 10, 20], 10)).toBe(3);
expect(findRotatedIndex([30, 40, 50, 10, 20], 50)).toBe(2);
expect(findRotatedIndex([30, 40, 50, 10, 20], 100)).toBe(-1);
expect(findRotatedIndex([9, 1, 3, 5, 7], 9)).toBe(0);