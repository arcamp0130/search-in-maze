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

    // Clear all elements from the queue
    clear() {
        this.items = [];
    }

    // Parse queue to string representation for debugging
    toString() {
        return this.items.toString();
    }

    // Check if an item exists in the queue using linear search
    // For maze nodes, item should be compared by its x,y coordinates
    contains(item) {
        // If array is empty or item wasn't provided
        if (this.isEmpty() || !item) return false;
        
        // If item is an object with x,y coordinates (maze node)
        if (item.x !== undefined && item.y !== undefined) {
            return this.items.some(element => 
                element.x === item.x && element.y === item.y
            );
        }
        
        // For primitive values or other objects
        return this.items.includes(item);
    }
}