// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    if (arr.length === 0) return [];

    return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

const expect = require("../expect");

let words = ['i', 'am', 'learning', 'recursion'];
expect(capitalizeWords(words)).toBe(['I', 'AM', 'LEARNING', 'RECURSION']);