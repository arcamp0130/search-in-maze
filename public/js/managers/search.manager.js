import Problem from "../data-structures/problem.structure";
import Queue from "../data-structures/queue.structure";
import Stack from "../data-structures/stack.structure";
import Node from "../data-structures/node.strucutre";

class SearchManager {
    constructor() {
        this.algorithms = Object.freeze({
            bfs: "bfs",
            dfs: "dfs"
        });
        // Delay between iterations (ms) - can be adjusted for visualization
        this.stepDelay = 50;
    }

    // Helper method to create a controlled delay
    async #delay(time) {
        return new Promise(_ => setTimeout(_, time || this.stepDelay));
    }

    async solve(problem) {
        // Check if argument is an instance of Problem,
        // if not, then this' an internal logical error
        if (!(problem instanceof Problem)) {
            console.error("Invalid problem provided.");
            return null;
        }

        // Calling proper algorithm according with selected one
        switch (problem.algorithm) {
            case this.algorithms.bfs:
                return await this.#bfs(problem);
            case this.algorithms.dfs:
                return await this.#dfs(problem);
            default:
                console.error(`Unknown algorithm: ${problem.algorithm}`);
                return null;
        }
    }

    #expand(node) {
        const x = parseInt(node.x);
        const y = parseInt(node.y);
        // only 4 neighbors because only orthogonal movment is allowed
        const expanded = [
            new Node(x + 1, y, node),   // Right
            new Node(x - 1, y, node),   // Left
            new Node(x, y + 1, node),   // Down
            new Node(x, y - 1, node)    // Up
        ];

        return expanded;
    }

    // BFS implementation
    async #bfs(problem) {
        console.log("Solving with BFS", problem);

        // queue for BFS, 'Set' to allow no-repeated values at visited cells
        const queue = new Queue();
        const visited = new Set();
        const path = [];

        // Using start node with null parent to properly trackback path
        const startNode = new Node(
            parseInt(problem.source.x),
            parseInt(problem.source.y),
        );
        queue.enqueue(startNode);

        try {
            while (!queue.isEmpty()) {
                const currentNode = queue.dequeue();

                // if there isn't node to analyze
                if (currentNode === null) continue;

                // Using a string key for visited node Set
                const nodeKey = `${currentNode.x},${currentNode.y}`;
                // If node is alredy at visited list
                if (visited.has(nodeKey)) continue;

                // mark current node as visited
                visited.add(nodeKey);

                if (problem.isGoal(currentNode)) return {
                    success: true,
                    path: path,
                    visitedCells: Array.from(visited),
                    message: "DFS succesfully solved maze! Check out resolution."
                }

                // Getting neighbors of current node. Storing array
                const neighbors = this.#expand(currentNode);
            } // while

        } catch (e) {
            console.error(`Error while running BFS: ${e.message}`);
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Something went wrong during BFS execution."
            }
        }

        // Mock behavior and response
        await this.#delay(2000);
        return {
            success: true,
            path: [],
            visitedCells: Array.from(visited),
            message: "BFS succesfully solved maze! Check out resolution."
        };
    } // BFS ends

    // DFS implementation
    async #dfs(problem) {
        console.log("Solving with DFS", problem);

        // stack for DFS, 'Set' to allow no-repeated values at visited cells
        const stack = new Stack();
        const visited = new Set();
        const path = [];
        const startNode = new Node(
            parseInt(problem.source.x),
            parseInt(problem.source.y),
        );
        stack.push(startNode);

        try {
            while (!stack.isEmpty()) {
                const currentNode = stack.pop();

                if (currentNode === null) continue;

                const nodeKey = `${currentNode.x},${currentNode.y}`;
                if (visited.has(nodeKey)) continue;

                visited.add(nodeKey);

                if (problem.isGoal(currentNode)) return {
                    success: true,
                    path: path,
                    visitedCells: Array.from(visited),
                    message: "DFS succesfully solved maze! Check out resolution."
                }

                const neighbors = this.#expand(currentNode);
            } // while

        } catch (e) {
            console.error(`Error while running DFS: ${e.message}`);
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Something went wrong during DFS execution."
            }
        }

        // Mock behavior and response
        await this.#delay(2000);
        return {
            success: true,
            path: [],
            visitedCells: [],
            message: "DFS succesfully solved maze! Check out resolution."
        };
    } // DFS ends
}

const searchManager = new SearchManager();
export { searchManager };