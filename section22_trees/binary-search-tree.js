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
}

// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(15);
// bst.insert(20);
// bst.insert(21);
// bst.insert(19);
// bst.insert(14);
// bst.insert(8);
// bst.insert(9);
// bst.insert(7);

// console.log(bst.find(8));

// bst.remove(8);
// bst.remove(15);
// bst.remove(7);
// bst.remove(6);
// bst.remove(21);

// console.log(bst);

// ------------------------------------------------

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// binarySearchTree.remove(50);
// binarySearchTree.remove(5);
// console.log(binarySearchTree);

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// binarySearchTree.remove(1);
// binarySearchTree.remove(20);
// console.log(binarySearchTree);

// ------------------------------------------------

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50)
//     .insert(60)
//     .insert(30)
//     .insert(25)
//     .insert(23)
//     .insert(24)
//     .insert(70);

// binarySearchTree.remove(10);
// binarySearchTree.remove(50);
// console.log(binarySearchTree);

// ------------------------------------------------

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)

binarySearchTree.remove(85);
console.log(binarySearchTree);
