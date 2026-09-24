// Creating pointers or values that correspond to an index or position and move towards the beginning/end/middle based on a certain condition.
// Basically using, when we search a pair in array/string/linked_list, etc.

// Very efficient for solving problems with minimal space complexity as well.

// ------------

// EXAMPLE 1: Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero
// Return undefined if a pair does not exist.

// Naive solution: O(n^2)
function sumZeroNaive(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];

        for (let j = array.length - 1; j > i; j--) {
            const secondNum = array[j];

            if (firstNum + secondNum === 0) {
                return [firstNum, secondNum];
            }
        }
    }

    return undefined;
}

// console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
// console.log(sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 5])) // [-2,2]
// console.log(sumZeroNaive([-2, 0, 1, 3])) // undefined
// console.log(sumZeroNaive([1, 2, 3])) // undefined

// Multiple pointers solution: O(n)
function sumZeroMultiplePointers(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const firstNum = array[left];
        const secondNum = array[right];
        const sum = firstNum + secondNum;

        if (sum > 0) {
            --right;
            continue;
        }

        if (sum < 0) {
            ++left;
            continue;
        }

        return [firstNum, secondNum];
    }

    return undefined;
}

// console.log(sumZeroMultiplePointers([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
// console.log(sumZeroMultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5])) // [-2,2]
// console.log(sumZeroMultiplePointers([-2, 0, 1, 3])) // undefined
// console.log(sumZeroMultiplePointers([1, 2, 3])) // undefined

// ------------

// EXAMPLE 2: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// O(n)
function countUniqueValues1(array) {
    let uniqueValuesCounter = 0;

    let pointerOne = 0;
    let pointerTwo = 1;

    while (pointerOne < array.length) {
        if (array[pointerOne] === array[pointerTwo]) {
            pointerTwo = findNextUniqueIndex(pointerTwo, array);
        }

        const valueOne = array[pointerOne];
        typeof valueOne === "number" && ++uniqueValuesCounter;
        const valueTwo = array[pointerTwo];
        typeof valueTwo === "number" && ++uniqueValuesCounter;

        pointerOne = findNextUniqueIndex(pointerTwo, array);
        pointerTwo = pointerOne + 1;
    }

    return uniqueValuesCounter;
}

function findNextUniqueIndex(current, array) {
    let next = current;

    while (next < array.length && array[current] === array[next]) {
        ++next;
    }

    return next;
}

// O(n)
function countUniqueValues2(array) {
    let uniqueValuesCounter = 0;
    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            uniqueValuesCounter++;
            i = j;
        }
    }

    if (array[array.length - 1] !== array[array.length - 2]) {
        uniqueValuesCounter++;
    }

    return uniqueValuesCounter;
}

// console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues2([])) // 0
// console.log(countUniqueValues2([-2, -1, -1, 0, 1])) // 4

// ------------

// EXAMPLE 3

function countNotUniqueValues(array) {
    if (!array.length) {
        return 0;
    }

    let notUniqueCounter = 1;
    let tempCounter = 1;
    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            ++tempCounter;
        } else {
            tempCounter = 1;
        }

        notUniqueCounter = Math.max(tempCounter, notUniqueCounter);
        i = j;
    }

    return notUniqueCounter;
}

console.log(countNotUniqueValues([1, 1, 1, 1, 1, 2])) // 5
console.log(countNotUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 3
console.log(countNotUniqueValues([])) // 0
console.log(countNotUniqueValues([-2, -1, -1, 0, 1])) // 2
console.log(countNotUniqueValues([-2, -1, -1, 0, 1, 1, 1, 1, 1])) // 5