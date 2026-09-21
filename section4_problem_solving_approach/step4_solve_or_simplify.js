// Solve the problem. But if you can't – solve a simpler problem first.

// By simplifying – means trying to ignore the hardest part but focus on everything else.
// It prevents you from getting stuck on one difficult part and you make zero progress.

// By simplifying –  you'll get some insights that may help you to solve that hard part.

// ------------

// Simplify:
// – Find the core difficulty in what you're trying to do;
// – Temporarily ignore that difficulty;
// – Write a simplified solution;
// – Then incorporate that difficulty back in;

// ------------

// Example: Write a function that takes in a string and returns counts of each character in the string.
// – If you forgot how to write RexExp to check if a character is alphanumeric, just check for letters and numbers in a simple way and get back to RexExp later;
// – If you have some troubles with object manipulation, start with the loop over the string and just console.log;
// – If you don't remember how to sanitize the string, just set these keys as it is and get back of character formatting later;

const ALPHANUMERIC_REGEXP = new RegExp('[a-z0-9]', "i");

function charCount(str) {
    // - make an object to return at the end;
    const obj = {};

    // - loop over the string;
    for (let index = 0; index < str.length; index++) {
        // - sanitize the character by making it lowercase and skipping not suitable characters;
        const char = str[index];
        if (!ALPHANUMERIC_REGEXP.test(char)) {
            continue;
        }
        const sanitizedChar = char.toLowerCase();

        // - check if key exists before incrementing; 
        if (Object.hasOwn(obj, sanitizedChar)) {
            obj[sanitizedChar]++;
        } else {
            obj[sanitizedChar] = 1;
        }
    }

    // - return object at end;
    return obj;
}

console.log(charCount("Hello, hi!"));