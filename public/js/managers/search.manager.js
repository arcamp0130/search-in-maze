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
            new Node({ x: x + 1, y: y, parent: node }),   // Right
            new Node({ x: x - 1, y: y, parent: node }),   // Left
            new Node({ x: x, y: y + 1, parent: node }),   // Down
            new Node({ x: x, y: y - 1, parent: node })    // Up
        ];

        return expanded;
    }

    #backtrack(parentMatrix, firstParent) {
        let currentParent = firstParent;
        const path = [];
        while (currentParent !== null) {
            path.push(currentParent);
            currentParent
                = parentMatrix[currentParent.y][currentParent.x];
        }
        return path;
    }

    // BFS implementation
    async #bfs(problem) {
        // queue for BFS, 'Set' to allow no-repeated values at visited cells
        const queue = new Queue();
        const visited = new Set();

        // Using start node with null parent to properly backtrack path
        const startNode = new Node({
            x: parseInt(problem.source.x),
            y: parseInt(problem.source.y),
            parent: null
        });

        // Empty matrix of parents that will contain parent of each node
        let parentMatrix = Array(10).fill(null).map(() => Array(10).fill(null))

        queue.enqueue(startNode);

        try {
            while (!queue.isEmpty()) {
                await this.#delay()
                const currentNode = queue.dequeue();

                // if there isn't node to analyze
                if (currentNode === null) continue;

                // Using a string key for visited node Set
                const nodeKey = `${currentNode.x},${currentNode.y}`;
                // If node is alredy at visited list
                if (visited.has(nodeKey)) continue;

                // mark current node as visited and add its parent to matrix
                visited.add(nodeKey);
                parentMatrix[currentNode.y][currentNode.x] = currentNode.parent;

                if (problem.isGoal(currentNode)) return {
                    success: true,
                    path: this.#backtrack(parentMatrix, currentNode.parent),
                    visitedCells: Array.from(visited),
                    message: "BFS succesfully solved maze! Check out resolution."
                }

                // Getting neighbors of current node. Storing array
                const neighbors = this.#expand(currentNode);

                // Adding neighbors to queue
                for (const neighbor of neighbors) {

                    // Ommit if out of maze or it's a wall
                    if (neighbor.x < 0 || neighbor.x >= 10 ||
                        neighbor.y < 0 || neighbor.y >= 10 ||
                        !problem.maze[neighbor.y][neighbor.x]) continue;

                    // Ommit if is in queue or was visited
                    if (visited.has(`${neighbor.x},${neighbor.y}`) ||
                        queue.contains(neighbor)) continue;

                    queue.enqueue(neighbor);
                }
            } // while
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Unable to solve with BFS."
            }

        } catch (e) {
            console.error(`Error while running BFS: ${e.message}`);
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Something went wrong during BFS execution."
            }
        }
    } // BFS ends

    // DFS implementation
    async #dfs(problem) {
        // stack for DFS, 'Set' to allow no-repeated values at visited cells
        const stack = new Stack();
        const visited = new Set();
        const startNode = new Node({
            x: parseInt(problem.source.x),
            y: parseInt(problem.source.y),
            parent: null
        });
        let parentMatrix = Array(10).fill(null).map(() => Array(10).fill(null))

        stack.push(startNode);

        try {
            while (!stack.isEmpty()) {
                await this.#delay();
                const currentNode = stack.pop();

                if (currentNode === null) continue;

                const nodeKey = `${currentNode.x},${currentNode.y}`;
                if (visited.has(nodeKey)) continue;

                visited.add(nodeKey);
                if (problem.isGoal(currentNode)) return {
                    success: true,
                    path: this.#backtrack(parentMatrix, currentNode.parent),
                    visitedCells: Array.from(visited),
                    message: "DFS succesfully solved maze! Check out resolution."
                }

                const neighbors = this.#expand(currentNode);
                parentMatrix[currentNode.y][currentNode.x] = currentNode.parent;

                for (const neighbor of neighbors) {
                    if (neighbor.x < 0 || neighbor.x >= 10 ||
                        neighbor.y < 0 || neighbor.y >= 10 ||
                        !problem.maze[neighbor.y][neighbor.x]) continue;

                    if (visited.has(`${neighbor.x},${neighbor.y}`) ||
                        stack.contains(neighbor)) continue;

                    stack.push(neighbor);
                }
            } // while
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Unable to solve with DFS."
            }
        } catch (e) {
            console.error(`Error while running DFS: ${e.message}`);
            return {
                success: false,
                path: [],
                visitedCells: Array.from(visited),
                message: "Something went wrong during DFS execution."
            }
        }
    } // DFS ends
}

const searchManager = new SearchManager();
export { searchManager };