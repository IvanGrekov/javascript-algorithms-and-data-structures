// Pattern uses objects or sets to collect values/frequencies of values
// This can avoid the need for nested loops or O(n^2) operations with arrays/strings

// ------------

// EXAMPLE 1: Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencies1 = getFrequenciesFromArray(arr1);
    const frequencies2 = getFrequenciesFromArray(arr2);

    for (const key in frequencies1) {
        const squaredKey = key ** 2;
        if (frequencies1[key] !== frequencies2[squaredKey]) {
            return false;
        }
    }

    return true;
}

function getFrequenciesFromArray(arr) {
    const acc = {};

    for (const val of arr) {
        acc[val] = (acc[val] || 0) + 1;
    }

    return acc;
}

// console.log(same([1, 2, 3], [4, 1, 9]))
// console.log(same([1, 2, 3], [1, 9]))
// console.log(same([1, 2, 1], [4, 4, 1]))
// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))

// EXAMPLE 2: Anagrams. Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// O(n)
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookupByStr1 = {};
    for (const char of str1) {
        lookupByStr1[char] ? ++lookupByStr1[char] : lookupByStr1[char] = 1;
    }

    for (const char of str2) {
        if (!lookupByStr1[char]) {
            return false;
        } else {
            --lookupByStr1[char];
        }
    }

    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));