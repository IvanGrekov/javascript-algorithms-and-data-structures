// Rules of thumb for space complexity:
// 1. Most primitive types (booleans, numbers, null, undefined) are constant space – O(1) space.
// 2. Strings require O(n) space where n is the length of the string.
// 3. Reference types (objects, arrays, functions) require O(n) space where n is the number of elements.

// O(1) space
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

// O(n) space
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}