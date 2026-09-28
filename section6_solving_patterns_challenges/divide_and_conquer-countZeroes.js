// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)

function countZeroes(arr) {
    if (!arr.length || arr[arr.length - 1] === 1) {
        return 0;
    }

    if (arr[0] === 0) {
        return arr.length;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((end + start) / 2);
        const el = arr[middle];

        if (el === 1) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return arr.length - end;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2
console.log(countZeroes([1, 0, 0, 0, 0])) // 4
console.log(countZeroes([0, 0, 0])) // 3
console.log(countZeroes([1, 1, 1, 1])) // 0
console.log(countZeroes([1, 1, 0, 0, 0, 0, 0], 2)) // 5
console.log(countZeroes([])) // 0
console.log(countZeroes([0])) // 1
console.log(countZeroes([1])) // 0
console.log(countZeroes([1, 0])) // 1
console.log(countZeroes([1, 1, 0])) // 1
console.log(countZeroes([1, 1, 1, 0])) // 1
console.log(countZeroes([1, 1, 1, 1, 0])) // 1
console.log(countZeroes([1, 0, 0])) // 2
console.log(countZeroes([1, 1, 0, 0])) // 2
console.log(countZeroes([1, 1, 1, 0, 0])) // 2
console.log(countZeroes([1, 1, 1, 1, 1, 0, 0, 0])) // 3
console.log(countZeroes([1, 1, 1, 1, 1, 1, 0, 0])) // 2
console.log(countZeroes([1, 1, 1, 1, 1, 1, 1, 0])) // 1
console.log(countZeroes([1, 1, 1, 1, 1, 1, 1, 1])) // 0
console.log(countZeroes([0, 0, 0, 0, 0, 0, 0])) // 7