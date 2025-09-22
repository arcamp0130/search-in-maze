export default class Problem {
    constructor(problem) {
        this.algorithm = problem.algorithm;
        this.maze = problem.maze;
        this.source = problem.source;
        this.target = problem.target;
    }

    isGoal(node) {
        return node.x === this.target.x
            && node.y === this.target.y;
    }
}