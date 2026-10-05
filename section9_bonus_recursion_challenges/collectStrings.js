// Write a function called collectStrings
// which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(input) {
    const result = [];

    const inner = (obj) => {
        for (const value of Object.values(obj)) {
            if (typeof value === "string") {
                result.push(value);
            } else if (typeof value === "object") {
                inner(value);
            }
        }
    }
    inner(input);

    return result;
}

// function collectStrings(input) {
//     let result = [];

//     for (const value of Object.values(input)) {
//         if (typeof value === "string") {
//             result.push(value);
//         } else if (typeof value === "object") {
//             result = result.concat(collectStrings(value));
//         }
//     }

//     return result;
// }

const expect = require("../expect");

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
expect(collectStrings(obj)).toBe(["foo", "bar", "baz"]);