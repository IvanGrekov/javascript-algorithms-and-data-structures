// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)
function areThereDuplicatesFrequencyCounter(...args) {
    let dictionary = {};

    for (let j = 0; j < args.length; j++) {
        const el = args[j];

        if (dictionary[el]) {
            return true;
        }

        dictionary[el] = true;
    }

    return false;
}

// Bonus:
// Time - O(n log n)
// Space - O(1)
function areThereDuplicates(...args) {
    args.sort();

    let i = 0;

    for (let j = 1; j < args.length; j++) {
        if (args[i] === args[j]) {
            return true;
        }

        i = j;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 