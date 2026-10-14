// It uses recursion similarly to merge sort
// It exploits the fact that arrays of 0 or 1 element are already sorted.
// It works by selecting one element (called "pivot") and put smaller elements to the left and larger elements to the right of the pivot.
// Once the pivot is positioned correctly, the process is recursively applied to the subarrays on the left and right of the pivot.

// 5 2 1 8 4 7 6 3
// Pivot = 5
// 2 1 4 3 | 5 | 7 6 8
