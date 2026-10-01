// Two essential parts to prevent infinite stacks:
// 1. Base Case – the place where the recursion stops
// 2. Inputs must differ - no sense to pass the same inputs

function areNumbersOdd(list) {
    if (!list?.length) return [];

    const [first, ...rest] = list;

    return [first % 2 !== 0, ...areNumbersOdd(rest)];
}

const expect = require("../expect");

// expect(areNumbersOdd([1, 2, 3, 4])).toBe([true, false, true, false]);
// expect(areNumbersOdd([2, 4, 6, 8])).toBe([false, false, false, false]);
// expect(areNumbersOdd([1, 3, 5, 7])).toBe([true, true, true, true]);
// expect(areNumbersOdd([])).toBe([]);

function countDown(num) {
    if (num < 0) return "";

    return `${num} ${countDown(--num)}`.trim();
}

expect(countDown(5)).toBe("5 4 3 2 1 0");
expect(countDown(0)).toBe("0");
