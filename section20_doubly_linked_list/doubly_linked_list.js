const util = require('util');

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    [util.inspect.custom]() {
        const label = (node) => (node ? JSON.stringify(node.value) : 'null');
        const markers = (node) => {
            const tags = [];
            if (node === this.head) tags.push('head');
            if (node === this.tail) tags.push('tail');
            return tags.length ? ` <- ${tags.join(', ')}` : '';
        };

        const rows = [];
        let current = this.head;
        while (current) {
            rows.push(
                `  { value: ${label(current)}, prev: ${label(current.prev)}, next: ${label(current.next)} }${markers(current)}`,
            );
            current = current.next;
        }

        return `DoublyLinkedList(${this.length}) [\n${rows.join(',\n')}\n]`;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const prevTail = this.tail;
            this.tail = newNode;

            prevTail.next = newNode;
            newNode.prev = prevTail;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const removingNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removingNode.prev;
            this.tail.next = null;
        }

        this.length--;
        return removingNode;
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("World");
doublyLinkedList.push("!");
doublyLinkedList.push("How");
doublyLinkedList.push("are");
doublyLinkedList.push("you");
doublyLinkedList.push("today?");

console.log(doublyLinkedList.pop());

console.log(doublyLinkedList);
