export default class Node {
    constructor(x, y, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent || null;
    }
}