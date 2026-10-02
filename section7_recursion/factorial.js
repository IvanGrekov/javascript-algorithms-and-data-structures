// Iterative approach
function iterativeFactorial(num) {
    if (num < 0) return undefined;

    let result = 1;

    for (let i = num; i > 1; i--) {
        result *= i;
    }

    return result;
}

const expect = require("../expect");

expect(iterativeFactorial(-1)).toBe(undefined);
expect(iterativeFactorial(0)).toBe(1);
expect(iterativeFactorial(1)).toBe(1);
expect(iterativeFactorial(2)).toBe(2);
expect(iterativeFactorial(3)).toBe(6);
expect(iterativeFactorial(4)).toBe(24);
expect(iterativeFactorial(5)).toBe(120);

// Recursive approach
function recursiveFactorial(num) {
    if (num < 0) return undefined;
    if (num <= 1) return 1;

    return num * recursiveFactorial(num - 1);
}

expect(recursiveFactorial(-1)).toBe(undefined);
expect(recursiveFactorial(0)).toBe(1);
expect(recursiveFactorial(1)).toBe(1);
expect(recursiveFactorial(2)).toBe(2);
expect(recursiveFactorial(3)).toBe(6);
expect(recursiveFactorial(4)).toBe(24);
expect(recursiveFactorial(5)).toBe(120);