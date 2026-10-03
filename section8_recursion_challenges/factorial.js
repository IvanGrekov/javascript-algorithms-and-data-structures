// factorial

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four(4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero(0!) is always 1.

function factorial(num) {
    if (num <= 1) return 1;

    return num * factorial(--num);
}

const expect = require("../expect");

expect(factorial(1)).toBe(1);
expect(factorial(2)).toBe(2);
expect(factorial(3)).toBe(6);
expect(factorial(4)).toBe(24);
expect(factorial(7)).toBe(5040);