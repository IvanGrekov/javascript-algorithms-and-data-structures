const evaluateTime = require("./evaluateTime");

// 5n + 2 operations
// f(n) -> n + 2 -> O(n)
function addUpTo1(n) {
    let total = 0;

    for (let value = 1; value <= n; value++) {
        total += value;
    }

    return total;
}

// 3 operations
// f(n) -> 3 -> O(1)
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

// evaluateTime(() => addUpTo2(1_000_000_000));

// 8n + 4 operations
// f(n) -> 8n + 4 -> O(n)
function upAndDown(n) {
    console.log("UP!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("DOWN!");
    for (let i = n - 1; i >= 0; i--) {
        console.log(i);
    }
}

// O(n^2)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// O(n)
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// O(1)
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}


// RULES:
// 1. Constants don't matter:
//                 - O(2n) -> O(n);
//                 - O(500) -> O(1);
//                 - O(13n^2) -> O(n^2)
// 2. Smaller terms don't matter:
//                 - O(2n + 5) -> O(n);
//                 - O(n^2 + 10n + 15) -> O(n^2)
// 3. Big O shorthands:
//                 - Arithmetic operations are constant
//                                  - 1_000_000_000 + 1_000_000_000 -> O(1)
//                 - Variable assignment is constant
//                                  - let a = [1_000_000_000]; -> O(1)
//                 - Accessing elements in an array (by index) or object (by key) is constant
//                                  - let arr = [1, 2, 3]; arr[0] -> O(1)
//                                  - let obj = { a: 1, b: 2, c: 3 }; obj.a -> O(1)
//                 - In a loop, the complexity is the number of iterations whatever happens inside the iteration
//                                  - for (let i = 0; i < n; i++) { console.log(i * 1_000_000_000); } -> O(n)