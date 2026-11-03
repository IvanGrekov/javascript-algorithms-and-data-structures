class Queue {
    constructor() {
        this.store = [];
    }

    add(value) {
        return this.store.push(value);
    }

    remove() {
        return this.store.shift();
    }

    length() {
        return this.store.length;
    }
}

const stack = new Queue();
stack.add(1);
stack.add(2);
stack.add(3);
console.log(stack.length()); // 3
console.log(stack.remove()); // 1
console.log(stack.length()); // 2
console.log(stack.remove()); // 2
console.log(stack.remove()); // 3
console.log(stack.length()); // 0
console.log(stack.remove()); // undefined