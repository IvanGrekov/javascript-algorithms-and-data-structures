// console.log(("a").localeCompare("b"));
// console.log(("b").localeCompare("a"));

Array.prototype.awesomeSort = function (cb = (a, b) => a - b) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            const a = this[j];
            const b = this[j + 1];
            const result = cb(a, b);

            if (result <= 0) {
                continue;
            }

            if (result > 0) {
                this[j] = b;
                this[j + 1] = a;
            }
        }
    }
}

const numArr = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
numArr.awesomeSort();
// console.log(numArr);

const strArr = ["b", "a", "c", "d", "e", "f", "k", "l", "i", "j", "g", "h"];
strArr.awesomeSort((a, b) => a.localeCompare(b));
console.log(strArr);

// Why to learn?
// - Sorting is incredibly common task
// - There are many different sorting algorithms, each has own advantages and disadvantages
// - Classic interview topic
