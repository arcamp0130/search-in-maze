// LIFO
// Last In - First Out
class Stack {
    constructor() {
        this.items = [];
    }

    pop() {
        return this.isEmpty()
            ? null // null if empty
            : this.items.pop();
    }

    push(item) {
        this.items.push(item);
    }

    peek() {
        return this.isEmpty()
            ? null // null if empty
            : this.items[this.size() - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

export default Stack;