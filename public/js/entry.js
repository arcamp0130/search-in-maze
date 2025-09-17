// TODO - Refactor generator with a proper implementation
// Using this implemenation in order to get a proper preview of maze

// Maze cells generator
window.addEventListener("load", () => {
    const maze = document.querySelector("#maze");
    const cell = document.createElement("span");
    cell.classList.add("cell");
    maze.innerHTML = ''

    // Generating a 10*10 maze
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            cell.id = `cell-${i}_${j}`;
            maze.appendChild(cell.cloneNode(true));
        }
    }
});