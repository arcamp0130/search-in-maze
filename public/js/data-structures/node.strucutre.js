export default class Node {
    constructor(node) {
        this.x = node.x;
        this.y = node.y;
        this.parent = node.parent != null
            ? {
                x: node.parent.x,
                y: node.parent.y
            }
            : null;
    }
}