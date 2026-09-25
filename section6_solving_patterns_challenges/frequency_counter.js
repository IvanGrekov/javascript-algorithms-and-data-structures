// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(x, y) {
    const xString = String(x);
    const yString = String(y);

    if (xString.length !== yString.length) {
        return false;
    }

    const xDictionary = getDictionaryFromString(xString);

    for (const digit of yString) {
        if (!xDictionary[digit] || xDictionary[digit] === 0) {
            return false;
        }

        xDictionary[digit]--;
    }

    return true;
}

function getDictionaryFromString(string) {
    const obj = {};

    for (const char of string) {
        obj[char] = ++obj[char] || 1;
    }

    return obj;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false