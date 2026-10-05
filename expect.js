function expect(actual) {
    return {
        toBe(expected) {
            if (Array.isArray(actual) && Array.isArray(expected)) {
                const arraysEqual = actual.length === expected.length && actual.every((val, index) => val === expected[index]);
                if (arraysEqual) {
                    console.log(`✅ PASS: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
                } else {
                    console.log(`❌ FAIL: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
                }

                return actual;
            }

            if (typeof actual === 'object' && actual !== null) {
                const objectsEqual = JSON.stringify(actual) === JSON.stringify(expected);
                if (objectsEqual) {
                    console.log(`✅ PASS: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
                } else {
                    console.log(`❌ FAIL: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
                }

                return actual;
            }

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