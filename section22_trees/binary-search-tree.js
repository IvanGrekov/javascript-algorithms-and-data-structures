const util = require('util');

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
            return;
        }

        let currentParent = this.root;
        while (currentParent) {
            if (currentParent.value === value) return;

            if (value < currentParent.value) {
                if (currentParent.left) {
                    currentParent = currentParent.left;
                    continue;
                } else {
                    currentParent.left = node;
                    return;
                }
            } else {
                if (currentParent.right) {
                    currentParent = currentParent.right;
                    continue;
                } else {
                    currentParent.right = node;
                    return;
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
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(21);
bst.insert(19);
bst.insert(14);
bst.insert(8);
bst.insert(9);
bst.insert(7);

// console.log(bst);
console.log(bst.find(21));