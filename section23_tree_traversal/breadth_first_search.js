const util = require('util');

class QueueNode {
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
        const newNode = new QueueNode(value);
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

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    [util.inspect.custom](depth, options, inspect) {
        if (!this.root) return 'BinarySearchTree (empty)';

        const rows = ['BinarySearchTree', inspect(this.root.value, options)];
        const nodes = [{ node: this.root, prefix: '' }];

        while (nodes.length) {
            const { node, prefix, side, isLast } = nodes.pop();
            if (side) {
                rows.push(`${prefix}${isLast ? '└──' : '├──'} ${side}: ${inspect(node.value, options)}`);
            }

            const childPrefix = side ? prefix + (isLast ? '    ' : '│   ') : prefix;
            if (node.right) {
                nodes.push({ node: node.right, prefix: childPrefix, side: 'R', isLast: true });
            }
            if (node.left) {
                nodes.push({ node: node.left, prefix: childPrefix, side: 'L', isLast: !node.right });
            }
        }

        return rows.join('\n');
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }

        let currentParent = this.root;
        while (currentParent) {
            if (currentParent.value === value) return this;

            if (value < currentParent.value) {
                if (currentParent.left) {
                    currentParent = currentParent.left;
                    continue;
                } else {
                    currentParent.left = node;
                    return this;
                }
            } else {
                if (currentParent.right) {
                    currentParent = currentParent.right;
                    continue;
                } else {
                    currentParent.right = node;
                    return this;
                }
            }
        }
    }

    find(value) {
        let node = this.root;
        while (node) {
            if (node.value === value) return node;

            if (value < node.value) {
                if (node.left) {
                    node = node.left;
                    continue;
                } else {
                    return undefined;
                }
            } else {
                if (node.right) {
                    node = node.right;
                    continue;
                } else {
                    return undefined;
                }
            }
        }
    }

    retrieveInorderSuccessor(removingNode) {
        let parent = removingNode;
        let node = removingNode.right;
        while (node) {
            if (node.left) {
                parent = node;
                node = node.left;
            } else {
                parent.left === node ? parent.left = null : parent.right = null;
                return node;
            }
        }

        return null;
    }

    replaceRemovingNode(removingNode, parent) {
        const children = [removingNode.left, removingNode.right].filter(Boolean);
        const isSingleChild = children.length === 1;
        const isDoubleChildren = children.length === 2;
        let replacingNode = null;
        let nodeToInsert = null;

        if (isSingleChild) {
            replacingNode = children[0];
        } else if (isDoubleChildren) {
            replacingNode = this.retrieveInorderSuccessor(removingNode);
            nodeToInsert = replacingNode.right;

            replacingNode.left = removingNode.left;
            replacingNode.right = removingNode.right;
            removingNode.left = null;
            removingNode.right = null;
        }


        if (parent) {
            parent.left === removingNode ? parent.left = replacingNode : parent.right = replacingNode;
        } else {
            this.root = replacingNode;
        }

        if (nodeToInsert) {
            this.insert(nodeToInsert.value);
        }

        return removingNode;
    }

    remove(value) {
        if (!this.root) return undefined;
        if (this.root.value === value) {
            return this.replaceRemovingNode(this.root);
        }

        let parent = this.root;
        let node = value < this.root.value ? this.root.left : this.root.right;
        while (node) {
            if (node.value === value) {
                return this.replaceRemovingNode(node, parent);
            }

            parent = node;
            if (value < node.value) {
                if (node.left) {
                    node = node.left;
                    continue;
                } else {
                    return undefined;
                }
            } else {
                if (node.right) {
                    node = node.right;
                    continue;
                } else {
                    return undefined;
                }
            }
        }
    }

    bfs() {
        const visited = [];

        const queue = new Queue();
        this.root && queue.enqueue(this.root);

        while (queue.size) {
            const dequeued = queue.dequeue();
            visited.push(dequeued.value);

            dequeued.left && queue.enqueue(dequeued.left);
            dequeued.right && queue.enqueue(dequeued.right);
        }

        return visited;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(tree.bfs());