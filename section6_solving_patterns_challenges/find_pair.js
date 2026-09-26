// Given an unsorted array and a number n,
// find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.

// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)

function findPairFrequencyCounter(array, target) {
    const dictionary = array.reduce((acc, val) => {
        acc[val] = ++acc[val] || 1;

        return acc;
    }, {});

    for (const first of array) {
        const second = first - target;

        if (second === first
            ? dictionary[second] > 1
            : dictionary[second]
        ) {
            return true;
        }
    }

    return false;
}

function findPair(array, target) {
    array.sort((a, b) => a - b);

    const targetAbs = Math.abs(target);
    let left = 0;
    let right = 1;

    while (right < array.length) {
        const leftVal = array[left];
        const rightVal = array[right];
        const diffAbs = Math.abs(leftVal - rightVal);

        if (diffAbs === targetAbs) {
            return true;
        }

        if (diffAbs < targetAbs) {
            ++right;
        } else {
            ++left;
            if (left === right) ++right;
        }
    }

    return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)) // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
console.log(findPair([4, -2, 3, 10], -6)) // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)) // false
console.log(findPair([], 0)) // false
console.log(findPair([5, 5], 0)) // true
console.log(findPair([-4, 4], -8)) // true
console.log(findPair([-4, 4], 8)) // true
console.log(findPair([1, 3, 4, 6], -2)) // true
console.log(findPair([0, 1, 3, 4, 6], -2)) // true
console.log(findPair([1, 2, 3], 0)) // false