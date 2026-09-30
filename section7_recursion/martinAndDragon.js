// Martin came to Dragon to define what numbers in the list are odd. But Dragon said that he can answer if the first number in the list is odd.
// So here the recursion comes into play
function martinAndDragon(list) {
    if (!list.length) return [];
    const [first, ...rest] = list;
    const isFirstOdd = first % 2 !== 0;
    return [isFirstOdd, ...martinAndDragon(rest)];
}

const expect = require("../expect");

expect(martinAndDragon([1, 2, 3, 4])).toBe([true, false, true, false]);
expect(martinAndDragon([2, 4, 6, 8])).toBe([false, false, false, false]);
expect(martinAndDragon([1, 3, 5, 7])).toBe([true, true, true, true]);
expect(martinAndDragon([])).toBe([]);