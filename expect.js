function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`✅ PASS: expected ${expected}, received ${actual}`);
            } else {
                console.log(`❌ FAIL: expected ${expected}, received ${actual}`);
            }

            return actual;
        },
    };
}

module.exports = expect;