// Initialisation 
const MIN_GRID = 16;
const MAX_GRID = 100;
let gridSize = 16; 


// DOM Elements
const gridContainer = document.querySelector(".gridContainer");
const clearBtn = document.querySelector("#clear");
const createBtn = document.querySelector("#create")

// Functions
function drawGrid(gridSize) {
    // console.log("adding " + gridSize);
    const totalGrid = gridSize * gridSize

    for (i = 0; i < totalGrid; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `calc(100% / ${gridSize})`;
        grid.style.height = `calc(100% / ${gridSize})`;
        grid.style.border = '0.1ex solid #3b5465';
        grid.style.borderRadius = '3px';
        gridContainer.appendChild(grid);
        hoverGrid(grid);
    }
}

function hoverGrid(grid) {
    grid.addEventListener("mouseover", colorGrid);
}

function colorGrid(event) {
    const grid = event.target;
    grid.style.backgroundColor = "#446074";
}

function clearGrid() {
    const allGrid = document.querySelectorAll(".grid");
    console.log(allGrid)
    allGrid.forEach((grid) => {
        grid.style.backgroundColor = "";
    })
}

clearBtn.addEventListener("click", clearGrid);

createBtn.addEventListener("click", () => {
    let validGrid = true;

    let newGridSize = prompt("Please enter new grid from 16-100")
    if ((MIN_GRID <= newGridSize) && (newGridSize <= MAX_GRID)){
        validGrid = false;
    }

    while (validGrid) {
        console.log("in loop");
        newGridSize = prompt("Please enter new grid from 16-100"); 
        if ((MIN_GRID <= newGridSize) && (newGridSize <= MAX_GRID)){
            validGrid = false;
        }
    }

    let gridSize = newGridSize;
    gridContainer.innerHTML = "";
    drawGrid(gridSize);
});

document.body.onload = drawGrid(gridSize);