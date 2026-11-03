class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return newNode.value;
    }

    dequeue() {
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

        this.size--;
        removingNode.next = null;

        return removingNode.value;
    }
}

const stack = new Queue();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
console.log(stack); // 3
console.log(stack.dequeue()); // 1
console.log(stack); // 2
console.log(stack.dequeue()); // 2
console.log(stack.dequeue()); // 3
console.log(stack); // 0
console.log(stack.dequeue()); // undefined