import Problem from "../data-structures/problem.structure";
import Queue from "../data-structures/queue.structure";
import Stack from "../data-structures/stack.structure";


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

    // BFS implementation
    async #bfs(problem) {
        console.log("Solving with BFS", problem);

        /**
         * Placeholder for BFS algorithm
         * Please, use Queue as main data structure
         */

        // Mock behavior and response
        await this.#delay(2000);
        return {
            success: true,
            path: [],
            visitedCells: [],
            message: "BFS succesfully solved maze! Check out resolution."
        };
    }

    // DFS implementation
    async #dfs(problem) {
        console.log("Solving with DFS", problem);

        /**
         * Placeholder for DFS algorithm
         * Please, use Stack as main data structure
         */

        // Mock behavior and response
        await this.#delay(2000);
        return {
            success: true,
            path: [],
            visitedCells: [],
            message: "DFS succesfully solved maze! Check out resolution."
        };
    }
}

const searchManager = new SearchManager();
export { searchManager };