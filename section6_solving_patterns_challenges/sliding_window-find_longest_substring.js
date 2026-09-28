// Write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
    const dictionary = {};
    let maxLength = 0;
    let start = 0;
    let end = 0;

    while (end < str.length) {
        const char = str[end];

        if (typeof dictionary[char] === "number" && dictionary[char] >= start) {
            start = dictionary[char] + 1;
        } else {
            maxLength = Math.max(maxLength, end - start + 1);
        }

        dictionary[char] = end;
        ++end;
    }

    return maxLength;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6