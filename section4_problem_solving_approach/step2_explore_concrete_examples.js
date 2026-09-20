// 1. Coming up with examples can help you understand the problem better
// 2. Examples also provide sanity checks, so you can verify that your solution works as expected

// ------------

// Simple examples of inputs and outputs:
// - Example 1:
// Input: 2, 3
// Output: 5

// - Example 2:
// Input: 10, 15
// Output: 25

// - Example 3:
// Input: -5, 5
// Output: 0

// ------------

// More complex examples:
// - Example 4:
// Input: 1.5, 2.5
// Output: 4.0

// - Example 5:
// Input: 1000000000, 2000000000
// Output: 3000000000

// - Example 6:
// Input: -10, -20
// Output: -30

// ------------

// Edge cases and special scenarios:
// - Example 7:
// Input: 0, 0
// Output: 0

// - Example 8:
// Input: 1, undefined
// Output: NaN

// ------------

// Invalid inputs:
// - Example 9:
// Input: "a", 5
// Output: NaN

// - Example 10:
// Input: null, 10
// Output: NaN

// - Example 11:
// Input: undefined, undefined
// Output: NaN

// ------------
// ------------

// Example: Write a function which takes in a string and returns counts of each character in the string.
// - Simple Example 1:
// Input: "aaaa"
// Output: { a: 4 }

// - Simple Example 2:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// - Complex Example 1:
// Input: "hi my phone number is 123-456-7890"
// To clarify:
// - Should we count spaces?
// - Should we count numbers?
// - Should we count special characters like dashes?

// - Complex Example 2:
// Input: "Hello, hi!"
// To clarify:
// - Should we count uppercase and lowercase letters as the same character?

// - Empty Input Example 1:
// Input: ""
// To clarify:
// - Should we return an empty object or null?

// - Invalid Input Example 1:
// Input: 12345
// To clarify:
// - Should we throw an error or return something?