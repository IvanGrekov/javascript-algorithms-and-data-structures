// What is a doubly linked list?
// A doubly linked list is a type of linked list in which each node contains a reference to both the next and the previous node.
// This allows for traversal in both directions, making certain operations more efficient compared to a singly linked list.
// Each node typically has three components: the value it holds, a pointer to the next node, and a pointer to the previous node.

// We can't take direct access to an element by its index like we can in an array.

// Complexities of common operations in a doubly linked list:
// Access by index: O(n)
// Search by value: O(n)

// Insertion at the beginning: O(1)
// Insertion at the end: O(1)
// Insertion at an arbitrary index: O(n) (since we may need to traverse the list to find the correct position)

// Deletion at the beginning: O(1)
// Deletion at the end: O(1)
// Deletion at an arbitrary index: O(n) (since we may need to traverse the list to find the correct position)
