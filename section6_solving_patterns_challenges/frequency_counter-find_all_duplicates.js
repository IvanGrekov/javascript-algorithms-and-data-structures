// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

// Time Complexity - O(n)

function findAllDuplicates(array) {
    const dictionary = {};

    for (const element of array) {
        dictionary[element] = ++dictionary[element] || 1;
    }

    return Object.entries(dictionary).reduce((acc, [key, value]) => {
        if (value > 1) {
            acc.push(parseInt(key))
        }

        return acc;
    }, []);
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1
