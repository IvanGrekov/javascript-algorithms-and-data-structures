// First in - Last out (FILO)

function martinAndDragon(list) {
    if (!list.length) return [];
    const [first, ...rest] = list;
    const isFirstOdd = first % 2 !== 0;
    return [isFirstOdd, ...martinAndDragon(rest)];
}

martinAndDragon([1, 22, 33, 4, 5, 67, 9])

// Call Stack:
// martinAndDragon([])
// martinAndDragon([9])
// martinAndDragon([67, 9])
// martinAndDragon([5, 67, 9])
// martinAndDragon([4, 5, 67, 9])
// martinAndDragon([33, 4, 5, 67, 9])
// martinAndDragon([22, 33, 4, 5, 67, 9])
// martinAndDragon([1, 22, 33, 4, 5, 67, 9])
