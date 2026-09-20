const names = ['Kelly', 'John', 'Jane', 'Mark'];
const values = [true, {}, [], 23, 'hello'];

// Access by index - O(1)
names[0];
values[3];

// Insertion to end - O(1)
names.push('Mary');
values.push(false);

// Insertion to beginning - O(n)
// It requires shifting all existing elements to the right to make space for the new element at the beginning of the array.
names.unshift('Tom');
values.unshift(null);

// Removing from end - O(1)
names.pop();
values.pop();

// Removing from beginning - O(n)
// It requires shifting all existing elements to the left to fill the gap left by the removed element at the beginning of the array.
names.shift();
values.shift();

// Searching - O(n)
names.includes('Jane');
values.includes(23);