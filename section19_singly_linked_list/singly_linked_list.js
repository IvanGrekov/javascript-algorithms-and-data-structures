class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const node1 = new Node("Hi");
// const node2 = new Node("World");
// const node3 = new Node("!");
// const node4 = new Node("How");
// const node5 = new Node("are");
// const node6 = new Node("you");
// const node7 = new Node("today");

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;

// console.log(JSON.stringify(node1, null, 2));

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let removingNode = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.head;
            while (newTail.next !== removingNode) {
                newTail = newTail.next;
            }
            newTail.next = null;
            this.tail = newTail;
        }

        this.length--;
        return removingNode;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;

        let removingNode = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return removingNode;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            node = node.next;
            counter++;
        }

        return null;
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
        if (index === this.length) {
            this.push(value);
            return true;
        } else if (index === 0) {
            this.unshift(value);
            return true;
        }

        const prevNode = this.get(index - 1);
        if (!prevNode) {
            return false;
        }

        const node = new Node(value);
        node.next = prevNode.next;
        prevNode.next = node;
        this.length++;

        return true;
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("World");
singlyLinkedList.push("!");
singlyLinkedList.push("How");
singlyLinkedList.push("are");
singlyLinkedList.push("you");
singlyLinkedList.push("today?");

// console.log(singlyLinkedList.pop());

// console.log(singlyLinkedList.shift());

// singlyLinkedList.unshift("Hi");

// console.log(singlyLinkedList.get(-1));
// console.log(singlyLinkedList.get(0));
// console.log(singlyLinkedList.get(1));
// console.log(singlyLinkedList.get(5));
// console.log(singlyLinkedList.get(6));

// console.log(singlyLinkedList.set(5, "today?!"));

// console.log(singlyLinkedList.insert(6, "!!!"));
// console.log(singlyLinkedList.insert(0, "Hi"));
// console.log(singlyLinkedList.insert(1, "Hi"));
// console.log(singlyLinkedList.insert(8, "!!!"));

console.log(JSON.stringify(singlyLinkedList, null, 2));