function bubbleSort(arr, cb = (a, b) => a - b) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (cb(arr[j], arr[j + 1]) <= 0) {
                continue;
            } else {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const numArr = [150, 2, 3, 1, 5, 6, 90, 4, 7, 9, 8, 11, 14, 17, 24, 28, 48, 120];
bubbleSort(numArr);
console.log(numArr);