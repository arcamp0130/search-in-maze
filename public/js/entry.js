// TODO - Refactor generator with a proper implementation
// Using this implemenation in order to get a proper preview of maze

// Cell classes, types
const cellType = Object.freeze({
    free: 'free',
    wall: 'wall',
    start: 'start',
    target: 'target',
    trackback: 'trackback',
    searching: 'searching'
});

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
});