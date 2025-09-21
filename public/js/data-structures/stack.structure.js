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

    // Clear all elements from the stack
    clear() {
        this.items = [];
    }

    // Parse stack to string representation for debugging
    toString() {
        return this.items.toString();
    }

    // Check if an item exists in the stack using linear search
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