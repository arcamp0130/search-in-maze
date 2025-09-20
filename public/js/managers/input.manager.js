class InputManager {
    constructor() {
        this.targetCell = null;
        this.startCell = null;
        this.cellType = Object.freeze({
            free: 'free',
            wall: 'wall',
            start: 'start',
            target: 'target',
            trackback: 'trackback',
            searching: 'searching'
        });
        this.maze = document.querySelector("#maze");
        this.resetBtn = document.querySelector("#reset-btn");
        this.solveBtn = document.querySelector("#solve-btn");
    }

    init() {
        this.#generateMaze();
        this.#appendEventListeners();
    }

    #generateMaze() {
        const cell = document.createElement("span");
        cell.classList.add("cell");
        cell.dataset.cellType = this.cellType.free;
        this.maze.innerHTML = '';

        // Generating a 10*10 maze
        for (let i = 0; i < 10; i++)
            for (let j = 0; j < 10; j++) {
                cell.dataset.y = `${i}`;
                cell.dataset.x = `${j}`;
                maze.appendChild(cell.cloneNode(true));
            }

        return;
    }

    #appendEventListeners() {
        this.#appendListenerToMaze();
        this.resetBtn.addEventListener("click", () => this.#resetMaze());

        // Adding asynchronous fucntions support in order to await for maze to be solved 
        this.solveBtn.addEventListener("click", async () => await this.#solveMaze());
    }

    #appendListenerToMaze() {
        document.querySelectorAll("#maze .cell").forEach(cell => {
            cell.addEventListener("click", (e) => this.#modifySelectedCell(e.target));
        });
    }

    // Maze is destroyed and regenerated, so appending
    // again listeners is important page to work.
    #resetMaze() {
        this.#generateMaze();
        this.#appendListenerToMaze();
    }

    #getMazeMatrix() {
        // Get cells and initialize maze matrix filled with 'false'
        const cells = this.maze.querySelectorAll(".cell");
        const matrix = Array(10).fill(null).map(() => Array(10).fill(false));

        cells.forEach(cell => {
            // Get cell coordinates
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);

            // A cell is considered "free" if it isn't wall, target or source point
            matrix[y][x] = cell.dataset.cellType === this.cellType.free;
        });

        return matrix;
    }

    async #solveMaze() {
        // TODO
        // Call function to solve algorithm with selected algorithm and maze as arguments.
        // Use 'Problem' function to define a new problem, state and several other implmementations.
        const problem = {
            algorithm: document.querySelector("input[name='algorithm']:checked").value,
            maze: this.#getMazeMatrix(),
            startCell: {
                x: this.startCell.dataset.x,
                y: this.startCell.dataset.y
            },
            targetCell: {
                x: this.targetCell.dataset.x,
                y: this.targetCell.dataset.y
            }
        }

        // Disabling buttons 'start' and 'reset'
        this.solveBtn.disabled = true;
        this.resetBtn.disabled = true;

        console.log("Resolution of maze have started.");
        const response = await this.#runAlgorithm(problem);
        console.log(`Message: \"${response.message}\"`);

        // Enabling buttons 'start' and 'reset' when getting an answer from algorithm
        this.solveBtn.disabled = false;
        this.resetBtn.disabled = false;
    }

    // This is a pseudo-implementation of maze resolution by using
    // selected algorithm. This function is used to simulate solving
    // process and wait times.
    async #runAlgorithm(problem) {
        if (!problem) return null; // Early return if no problem is provided (initial call)

        // Simulate algorithm processing time
        await new Promise(resolve => setTimeout(resolve, 2000));

        // For now, return a mock response
        return {
            success: true,
            path: [], // This would contain the solution path
            visitedCells: [], // This would contain cells visited during search
            message: `Maze succesfully solved!. Check out resolution.`
        };
    }

    #modifySelectedCell(cell) {
        const newValue = document.querySelector("input[name='cell-change']:checked").dataset.cellType;

        // TODO: Refactor verification of cells
        if (cell.dataset.cellType === this.cellType.start) {
            this.startCell.dataset.cellType = this.cellType.free;
            this.startCell = null;
        }

        if (cell.dataset.cellType === this.cellType.target) {
            this.targetCell.dataset.cellType = this.cellType.free;
            this.targetCell = null
        }

        cell.dataset.cellType = newValue;

        if (newValue === this.cellType.start) {
            // Removing "start" attr if it was previously set
            if (this.startCell != null)
                this.startCell.dataset.cellType = this.cellType.free;
            this.startCell = cell;
        }

        if (newValue === this.cellType.target) {
            // Removing "target" attr if it was previously set
            if (this.targetCell != null)
                this.targetCell.dataset.cellType = this.cellType.free;
            this.targetCell = cell;
        }
    }
}

const inputManager = new InputManager();
export { inputManager };