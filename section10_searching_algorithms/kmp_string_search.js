// KMP (Knuth-Morris-Pratt) string searching algorithm.
// Unlike naive string search, it never re-examines characters of `string` that
// were already matched, giving O(n + m) time instead of O(n * m).

// Builds the LPS ("Longest proper Prefix which is also a Suffix") table for
// the pattern. lps[i] tells us how many characters we can safely "carry over"
// instead of restarting the pattern comparison from scratch after a mismatch.
function buildLPSTable(subString) {
    const lps = new Array(subString.length).fill(0);

    let prefixLength = 0;
    let i = 1;

    while (i < subString.length) {
        if (subString[i] === subString[prefixLength]) {
            ++prefixLength;
            lps[i] = prefixLength;
            ++i;
        } else if (prefixLength > 0) {
            prefixLength = lps[prefixLength - 1];
        } else {
            lps[i] = 0;
            ++i;
        }
    }

    return lps;
}

function kmpStringSearch(string, subString) {
    let counter = 0;

    if (subString.length > string.length) return counter;
    if (subString.length === string.length && subString !== string) return counter;

    const lps = buildLPSTable(subString);

    let i = 0; // pointer into `string`
    let j = 0; // pointer into `subString`

    while (i < string.length) {
        if (string[i] === subString[j]) {
            ++i;
            ++j;

            if (j === subString.length) {
                ++counter;
                j = lps[j - 1];
            }
        } else if (j > 0) {
            j = lps[j - 1];
        } else {
            ++i;
        }
    }

    return counter;
}

const expect = require('../expect');

// expect(kmpStringSearch('harry says ha-ha in hamburg', 'ha')).toBe(4);
// expect(kmpStringSearch('harry says ha-ha in hamburg', 'har')).toBe(1);
// expect(kmpStringSearch('harry says ha-ha in hamburg', 'xyz')).toBe(0);
// expect(kmpStringSearch('wowomgzomg', 'omg')).toBe(2);
// expect(kmpStringSearch('omg', 'wowomgzomg')).toBe(0);
expect(kmpStringSearch('aaaaa', 'aaba')).toBe(4);
