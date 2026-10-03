// power

// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponents.

function power(num, exponent) {
    if (exponent === 0) return 1;

    return num * power(num, --exponent);
}

const expect = require("../expect");

expect(power(2, 0)).toBe(1);
expect(power(2, 2)).toBe(4);
expect(power(2, 3)).toBe(8);
expect(power(2, 4)).toBe(16);
expect(power(3, 3)).toBe(27);
expect(power(5, 0)).toBe(1);
