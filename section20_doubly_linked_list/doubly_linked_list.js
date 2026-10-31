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

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const removingNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removingNode.next;
            this.head.prev = null;
        }

        this.length--;
        return removingNode;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const prevHead = this.head;
            this.head = newNode;

            newNode.next = prevHead;
            prevHead.prev = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        const shouldStartFromTail = (this.length / 2) < index;
        let counter = shouldStartFromTail ? this.length - 1 : 0;
        let node = shouldStartFromTail ? this.tail : this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            shouldStartFromTail ? counter-- : counter++;
            node = shouldStartFromTail ? node.prev : node.next;
        }
    }

    set(index, value) {
        const node = this.get(index);

        if (node) {
            node.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return true;
        } else if (index === this.length) {
            this.push(value);
            return true;
        }

        const prevNode = this.get(index - 1);
        if (!prevNode) {
            return false;
        }

        const nextNode = prevNode.next;
        const node = new Node(value);
        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        this.length++;

        return true;
    }

    remove(index) {
        if (index === 0) {
            return this.shift();
        } else if (index === this.length) {
            return this.pop();
        }

        const removingNode = this.get(index);
        if (!removingNode) {
            return false;
        }

        const prevNode = removingNode.prev;
        const nextNode = removingNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removingNode.prev = null;
        removingNode.next = null;
        this.length--;

        return removingNode;
    }

    reverse() {
        let node = this.head;

        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next
            prev = node;
            node = next;
        }

        return this;
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("1");
doublyLinkedList.push("2");
doublyLinkedList.push("3");
doublyLinkedList.push("4");
doublyLinkedList.push("5");
doublyLinkedList.push("6");

console.log(doublyLinkedList);

doublyLinkedList.reverse();

console.log(doublyLinkedList);
