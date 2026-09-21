// Refactoring questions:
// – Can you check the results?
// – Can you derive the results differently?
// – Can you understand it at a glance?
// – Can you use the result or method for some other problem? Sometimes your solution can be used for other problems and you can save time by reusing it.
// – Can you improve the performance of your solution? Mainly in terms of time and space complexity.
// – Can you think of other ways to refactor? Does it follow code conventions or style guides?
// – How other people solve this problem? Can you learn something from them?

// ------------

const isAlphanumeric = (char) => {
    const charCode = char.charCodeAt(0);
    const isLetter = charCode >= 97 && charCode <= 122; // a-z
    const isNumber = charCode >= 48 && charCode <= 57; // 0-9

    return isLetter || isNumber;
}

// Example: Write a function that takes in a string and returns counts of each character in the string.
function charCount(str) {
    // - make an object to return at the end;
    const obj = {};

    // - sanitize the character by making it lowercase and skipping not suitable characters;
    const sanitizedString = str.toLowerCase();

    // - loop over the string;
    for (const char of sanitizedString) {
        if (!isAlphanumeric(char)) {
            continue;
        }

        obj[char] = ++obj[char] || 1;
    }

    // - return object at end;
    return obj;
}

console.log(charCount("Hello, hi!"));