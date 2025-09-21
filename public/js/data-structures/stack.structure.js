// LIFO
// Last In - First Out
export default class Stack {
    constructor() {
        this.items = [];
    }

    // Remove and return last element in array
    pop() {
        return this.isEmpty()
            ? null // null if empty
            : this.items.pop();
    }

    // Add a new element as the last one in array
    push(item) {
        this.items.push(item);
    }

    // Only return last element in array
    peek() {
        return this.isEmpty()
            ? null // null if empty
            : this.items[this.size() - 1];
    }

    // Return array length
    size() {
        return this.items.length;
    }

    // Check if array is empty and return confirmation
    isEmpty() {
        return this.items.length === 0;
    }
}