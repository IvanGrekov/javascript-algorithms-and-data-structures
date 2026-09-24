// Involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a new window is created).
// Very useful for keeping track of a subset of data in an array/string etc.

// ------------

// EXAMPLE 1: Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Naive solution: O(n^2)
function maxSubarraySumNaive(arr, n) {
    if (arr.length < n || n === 0) {
        return null;
    }

    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - n; i++) {
        let sum = 0;

        for (let j = i; j < i + n; j++) {
            sum += arr[j];
        }

        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}

// console.log(maxSubarraySumNaive([4, 2, 1, 6], 1)) // 6
// console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySumNaive([4, 2, 1, 6, 2], 4)) // 13
// console.log(maxSubarraySumNaive([], 4)) // null

// Sliding window solution: O(n)
function maxSubarraySum(arr, n) {
    if (arr.length < n || n === 0) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

// console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log(maxSubarraySum([], 4)) // null

// ------------

// EXAMPLE 2: Given a string s, find the length of the longest substring without repeating characters.

function longestWithoutRepeating(str) {
    const lastSeen = new Map();
    let max = 0;
    let left = 0;

    for (let right = 0; right < str.length; right++) {
        const char = str[right];
        const lastSeenByChar = lastSeen.get(char);

        if (typeof lastSeenByChar === "number" && lastSeenByChar >= left) {
            left = lastSeenByChar + 1;
        }

        lastSeen.set(char, right);
        max = Math.max(max, right - left + 1);
    }

    return max;
}

console.log(longestWithoutRepeating("abba")) // 2;
console.log(longestWithoutRepeating("abcabcbb")) // 3;
console.log(longestWithoutRepeating("bbbbb")) // 1;
console.log(longestWithoutRepeating("pwwkew")) // 3;
console.log(longestWithoutRepeating("")) // 0;
console.log(longestWithoutRepeating("dvdf")) // 3;