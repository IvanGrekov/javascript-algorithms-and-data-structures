function naiveStringSearch(string, subString) {
    let counter = 0;

    if (subString.length > string.length) return counter;
    if (subString.length === string.length && subString !== string) return counter;

    for (let i = 0; i <= string.length - subString.length; i++) {
        for (let j = 0; j < subString.length; j++) {
            if (string[i + j] !== subString[j]) {
                break;
            } else if (j === subString.length - 1) {
                ++counter;
            }
        }
    }

    return counter;
}

const expect = require('../expect');

expect(naiveStringSearch('harry says ha-ha in hamburg', 'ha')).toBe(4);
expect(naiveStringSearch('harry says ha-ha in hamburg', 'har')).toBe(1);
expect(naiveStringSearch('harry says ha-ha in hamburg', 'xyz')).toBe(0);
expect(naiveStringSearch('wowomgzomg', 'omg')).toBe(2);
expect(naiveStringSearch('omg', 'wowomgzomg')).toBe(0);