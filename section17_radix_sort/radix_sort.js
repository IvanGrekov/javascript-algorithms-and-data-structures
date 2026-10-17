function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }

    return max;
}

// Time Complexity: O(nk)
// where n is the number of elements and k is the number of digits in the largest number

// Space Complexity: O(n + k)
function radixSort(arr) {
    let result = [...arr];
    const maxDigits = mostDigits(result);

    for (let k = 0; k < maxDigits; k++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < result.length; i++) {
            const number = result[i];
            buckets[getDigit(number, k)].push(number);
        }

        result = [].concat(...buckets);
    }

    return result;
}

console.log(radixSort([1, 23, 456, 7, 11, 0]));

const expect = require('../expect');