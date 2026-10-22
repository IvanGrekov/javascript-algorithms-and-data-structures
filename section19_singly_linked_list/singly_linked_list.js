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
            this.length = 1;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("Hi");
singlyLinkedList.push("World");
singlyLinkedList.push("!");
singlyLinkedList.push("How");
singlyLinkedList.push("are");
singlyLinkedList.push("you");
singlyLinkedList.push("today");
console.log(JSON.stringify(singlyLinkedList, null, 2));