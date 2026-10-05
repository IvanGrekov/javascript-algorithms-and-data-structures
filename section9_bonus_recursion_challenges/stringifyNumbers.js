// Write a function called stringifyNumbers
// which takes in an object and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings,
// and not modify the original.
// Keep the original object unchanged.

function stringifyNumbers(input) {
    const output = {};
    const entries = Object.entries(input);

    for (const [key, value] of entries) {
        if (typeof value === 'number') {
            output[key] = String(value);
        } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            output[key] = stringifyNumbers(value);
        } else {
            output[key] = value;
        }
    }

    return output;
}

const expect = require("../expect");

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
let obj2 = {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
expect(stringifyNumbers(obj1)).toBe(obj2);