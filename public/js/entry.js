// TODO - create class-based managers in order to respond to Encapsulation
// Use all these methods and attributes in a class named InputManager

// Cell classes, types
const cellType = Object.freeze({
    free: 'free',
    wall: 'wall',
    start: 'start',
    target: 'target',
    trackback: 'trackback',
    searching: 'searching'
});

let targetIsSet = false;
let startIsSet = false;

// Maze cells generator
window.addEventListener("load", () => {
    const maze = document.querySelector("#maze");
    const cell = document.createElement("span");
    cell.classList.add("cell");
    cell.dataset.cellType = cellType.free;
    maze.innerHTML = ''

    // Generating a 10*10 maze
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            cell.dataset.y = `${i}`;
            cell.dataset.x = `${j}`;
            maze.appendChild(cell.cloneNode(true));
        }
    }

    // Appending event listener to each cell at maze
    document.querySelectorAll("#maze .cell").forEach(cell => {
        cell.addEventListener("click", (e) => {
            const selected = e.target;
            const newValue = document.querySelector("input[name='cell-change']:checked").dataset.cellType;
            selected.dataset.cellType = newValue;
        });
    });
});