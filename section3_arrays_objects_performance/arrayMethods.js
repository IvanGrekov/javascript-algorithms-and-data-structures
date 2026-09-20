// push - O(1)

// pop - O(1)

// shift - O(n) // Requires shifting all existing elements to the left to fill the gap left by the removed element at the beginning of the array.

// unshift - O(n) // Requires shifting all existing elements to the right to make space for the new element at the beginning of the array.

// concat - O(n) // Creates a new array by combining two or more arrays, which requires iterating through all elements of the arrays being concatenated.

// slice - O(n) // Creates a shallow copy of a portion of an array, which requires iterating through the specified range of elements.

// splice - O(n) // Adds or removes elements from an array, which may require shifting elements to accommodate the changes.

// forEach/map/filter/reduce/find/etc - O(n) // Iterates through each element of the array.

// sort - O(n log n) // Sorts the elements of an array, which typically involves a comparison-based sorting algorithm with a time complexity of O(n log n).
function sortArray(arr) {
    const n = arr.length;

    // n
    for (let i = 0; i < n - 1; i++) {

        // n - i - 1
        for (let j = 0; j < n - i - 1; j++) {
            const current = arr[j];
            if (current > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                arr[j] = arr[j + 1];
                arr[j + 1] = current;
            }
        }
    }

    return arr;
}