// Involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

// Examples of this pattern:
// - Merge Sort
// - Quick Sort
// - Binary Search

// ------------

// EXAMPLE 1: Given a sorted array of integers, write a function called search, that accepts a value
// and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Binary search: O(log n)
function search(array, value) {
    let start = 0;
    let end = array.length - 1;

    if (array[start] > value || array[end] < value) {
        return -1;
    }

    while (start <= end) {
        let middleIndex = Math.floor((end + start) / 2);
        const element = array[middleIndex];

        if (element === value) {
            return middleIndex;
        }

        if (element > value) {
            end = middleIndex - 1;
        } else {
            start = middleIndex + 1;
        }
    }

    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3;
console.log(search([1, 2, 3, 4, 5, 6], 5)); // 4;
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5;
console.log(search([1], 1)); // 0;
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1;