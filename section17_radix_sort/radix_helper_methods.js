function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const expect = require('../expect');

expect(getDigit(12345, 0)).toBe(5);
expect(getDigit(12345, 1)).toBe(4);
expect(getDigit(12345, 4)).toBe(1);
expect(getDigit(12345, 5)).toBe(0);
expect(getDigit(7, 0)).toBe(7);
expect(getDigit(7, 1)).toBe(0);

function digitCount(num) {
    // return String(Math.floor(Math.abs(num))).length;
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

expect(digitCount(12345)).toBe(5);
expect(digitCount(7)).toBe(1);
expect(digitCount(0)).toBe(1);

function mostDigits(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }

    return max;
}

expect(mostDigits([12345, 7, 123, 4567])).toBe(5);
expect(mostDigits([1, 22, 333, 4444, 55555])).toBe(5);
expect(mostDigits([0, 0, 0])).toBe(1);