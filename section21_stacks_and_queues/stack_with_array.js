class Stack {
    constructor() {
        this.store = [];
    }

    push(value) {
        return this.store.push(value);
    }

    pop() {
        return this.store.pop();
    }

    length() {
        return this.store.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.length()); // 3
console.log(stack.pop()); // 3
console.log(stack.length()); // 2
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.length()); // 0
console.log(stack.pop()); // undefined