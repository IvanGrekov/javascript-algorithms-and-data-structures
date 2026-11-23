// BFS vs DFS comparison

// Time Complexity:
// BFS: O(n) - visits each node once
// DFS: O(n) - visits each node once

// Space Complexity:
// BFS: O(w) - where w is the maximum width of the tree
// DFS: O(h) - where h is the maximum height of the tree

// NOTES:
// BFS uses more memory when the tree is very wide, as it stores all nodes at the current level.
// DFS uses more memory when the tree is very deep, as it may need to store all nodes along the current path in the call stack.

// ------------------------------------------------------

// How to measure your tree
// You can measure both properties with a level-by-level traversal, using your nodes’ left and right properties:
function measureTree(root) {
    if (!root) return { height: 0, width: 0 };

    let level = [root];
    let height = 0;
    let width = 0;

    while (level.length) {
        height++;
        width = Math.max(width, level.length);

        const nextLevel = [];
        for (const node of level) {
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        level = nextLevel;
    }

    return { height, width };
}

console.log(measureTree(tree.root)); // { height: 3, width: 3 }

// Measuring takes O(n) time and O(width) working space, so doing it solely to select a traversal may cost as much as the traversal itself. If you already know the tree’s structure—or maintain these statistics as it changes—use that knowledge.

// ------------------------------------------------------

// PreOrder vs PostOrder vsInOrder
// PreOrder: Visit the node, traverse the left subtree, traverse the right subtree
// PostOrder: Traverse the left subtree, traverse the right subtree, visit the node
// InOrder: Traverse the left subtree, visit the node, traverse the right subtree

// NOTES:
// PreOrder is useful for creating a copy of the tree (for example for serializing it).
// PostOrder is useful for deleting or freeing nodes in the tree.
// InOrder is useful for retrieving nodes in sorted order for binary search trees (for example to put them into a sorted array).

// ------------------------------------------------------

// PostOrder:
// Visits a node’s children before the node itself.
// That makes it useful when deleting an entire tree.
// You can free each subtree while its parent still exists, then free the parent.
//    A
//   / \
//  B   C
// If you freed A first in a language with manual memory management, you could lose the references needed to reach and free B and C.
