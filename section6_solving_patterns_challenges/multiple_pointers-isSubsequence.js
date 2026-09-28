// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        const str1Char = str1[i];
        const str2Char = str2[j];

        if (str1Char === str2Char) {
            ++i;
            ++j;
        } else {
            ++j;
        }
    }

    return i === str1.length && j <= str2.length ? true : false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)