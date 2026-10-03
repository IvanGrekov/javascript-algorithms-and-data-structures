// fib

// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number there after is equal to the sum of the previous two numbers.

// function fib(num) {
//     const result = [];

//     const inner = (counter) => {
//         if (counter <= 0) return;

//         let last = result[result.length - 1];
//         if (!last) {
//             last = 1;
//             result.push(1);
//         }

//         let preLast = result[result.length - 2];
//         if (!preLast) {
//             preLast = 1;
//             result.push(1);
//         }

//         result.push(last + preLast);

//         inner(num - result.length);
//     };

//     inner(num);

//     return result[num - 1];
// }

function fib(num) {
    if (num <= 2) return 1;

    return fib(num - 2) + fib(num - 1);
}

const expect = require("../expect");

expect(fib(4)).toBe(3);
expect(fib(10)).toBe(55);
expect(fib(28)).toBe(317811);
expect(fib(35)).toBe(9227465);