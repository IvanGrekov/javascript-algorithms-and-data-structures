class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;

        return this.size;
    }

    pop() {
        if (!this.size) {
            return undefined;
        }

        const removingNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removingNode.next;
        }

        removingNode.next = null;
        this.size--;

        return removingNode.value;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // 3
console.log(stack.pop()); // 3
console.log(stack); // 2
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack); // 0
console.log(stack.pop()); // undefined