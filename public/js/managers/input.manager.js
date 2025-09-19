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
        this.generateMaze();
        this.#appendEventListeners();
    }

    generateMaze() {
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
        document.querySelectorAll("#maze .cell").forEach(cell => {
            cell.addEventListener("click", (e) => this.#modifySelectedCell(e.target));
        });
        this.resetBtn.addEventListener("click", () => this.generateMaze());
        
        // Adding asynchronous fucntions support in order to await for maze to be solved 
        this.solveBtn.addEventListener("click", async () => await this.#solveMaze());
    }

    async #solveMaze() {
        // TODO
        // Call function to solve algorithm with selected algorithm and maze as arguments.
        // Use 'Problem' function to define a new problem, state and several other implmementations.
        const algorithm = document.querySelector("input[name='algorithm']:checked").dataset.algorithm;
        
        // Disabling buttons 'start' and 'reset'
        this.solveBtn.disabled = true;
        this.resetBtn.disabled = true;
        
        // Using this kind of implementation only to show that webpage is ready to await for response
        console.log(algorithm);
        await setTimeout(() => console.log("One second passed"), 1000);
        
        // Enabling buttons 'start' and 'reset' when getting an answer from algorithm
        this.solveBtn.disabled = false;
        this.resetBtn.disabled = false;
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