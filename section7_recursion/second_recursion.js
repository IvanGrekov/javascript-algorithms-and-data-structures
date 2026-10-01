function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// Example of sumRange(3)
// sumRange(1) - 1
// sumRange(2) - 2 + sumRange(1)
// sumRange(3) - 3 + sumRange(2)


const expect = require("../expect");

expect(sumRange(5)).toBe(15);
expect(sumRange(2)).toBe(3);
expect(sumRange(1)).toBe(1);
expect(sumRange(3)).toBe(6);
expect(sumRange(4)).toBe(10);