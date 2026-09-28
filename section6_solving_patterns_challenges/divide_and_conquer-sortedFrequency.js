// Given a sorted array and a number,
// write a function called sortedFrequency that counts the occurrences of the number in the array

// Time Complexity - O(log n)

function sortedFrequency(arr, n) {
    if (!arr.length
        || arr[0] > n
        || arr[arr.length - 1] < n
    ) {
        return -1;
    }

    const firstIndex = findFirst(arr, n);
    if (firstIndex === -1) {
        return -1;
    }

    return findLast(arr, n) - firstIndex + 1;
}

function findFirst(arr, n) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((end + start) / 2);

        if (arr[middle] < n) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return arr[start] !== n ? -1 : start;
}

function findLast(arr, n) {
    let start = 0;
    let end = arr.length - 1;

    while (end > start) {
        const middle = Math.floor((end + start) / 2);

        if (arr[middle] <= n) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return arr[end] === n ? end : end - 1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 5], 4)) // -1
console.log(sortedFrequency([0, 0, 2, 2, 2, 2, 3, 5], 1)) // -1
console.log(sortedFrequency([], 1)) // -1
console.log(sortedFrequency([5], 5)) // 1
console.log(sortedFrequency([5], 3)) // -1
console.log(sortedFrequency([1, 2, 3, 4, 5], 1)) // 1
console.log(sortedFrequency([1, 2, 3, 4, 5], 5)) // 1
console.log(sortedFrequency([1, 1, 1, 1], 1)) // 4
console.log(sortedFrequency([1, 2, 2, 2, 3], 2)) // 3
console.log(sortedFrequency([1, 1, 2, 3, 3], 3)) // 2
console.log(sortedFrequency([1, 1, 1, 2, 2, 3], 1)) // 3
console.log(sortedFrequency([1, 2, 3, 3, 3, 3, 4], 3)) // 4
console.log(sortedFrequency([0, 0, 0, 1, 1, 2, 2], 0)) // 3
console.log(sortedFrequency([0, 0, 0, 1, 1, 2, 2], 2)) // 2
console.log(sortedFrequency([1, 2, 2, 4, 4, 4, 5], 4)) // 3