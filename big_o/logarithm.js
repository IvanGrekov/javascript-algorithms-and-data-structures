// Logarithmic time complexity is represented as O(log n).
// This means that the time complexity increases logarithmically with the input size.
// This is often seen in algorithms that divide the input into smaller sub-problems.

// Example:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];
        if (midValue === target) {
            return mid;
        }

        if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}