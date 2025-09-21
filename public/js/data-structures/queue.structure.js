// FIFO
// First In - First Out
export default class Queue {
    constructor() {
        this.items = [];
    }
    
    // Remove and return first element in array
    dequeue() {
        return this.isEmpty()
            ? null // null if empty
            : this.items.shift();
    }

    // Add a new element as the last one in array
    enqueue(item) {
        this.items.push(item);
    }

    // Return first element in array without removing it
    peek() {
        return this.isEmpty()
            ? null // null if empty
            : this.items[0];
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