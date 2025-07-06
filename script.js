// Initialisation 
const MIN_GRID = 16;
const MAX_GRID = 100;
const MODES = {
    HOVER : "hover",
    RGB : "rgb",
}

let gridSize = 16; 
let currentMode = MODES.HOVER;

// DOM Elements
const gridContainer = document.querySelector(".gridContainer");
const clearBtn = document.querySelector("#clear");
const createBtn = document.querySelector("#create");
const hoverBtn = document.querySelector("#hover");
const rainbowBtn = document.querySelector("#rainbow");
const gridInfo = document.querySelector(".gridInfo");
const modeInfo = document.querySelector(".modeInfo");

// Functions
function drawGrid(gridSize) {
    clearGrid();
    const totalGrid = gridSize * gridSize

    for (let i = 0; i < totalGrid; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `calc(100% / ${gridSize})`;
        grid.style.height = `calc(100% / ${gridSize})`;
        grid.style.border = '0.1ex solid #3b5465';
        grid.style.borderRadius = '3px';
        grid.addEventListener("mouseover", hoverGrid);
        gridContainer.appendChild(grid);       
    }
}

function hoverGrid(event) {
    const grid = event.target;

    if (currentMode == "hover") {
        grid.style.backgroundColor = "#446074";
    } else {
        grid.style.backgroundColor = randomRGBGrid();
    }
}

function randomRGBGrid() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function clearGrid() {
    const allGrid = document.querySelectorAll(".grid");
    allGrid.forEach((grid) => {
        grid.style.backgroundColor = "";
    })

}

// Event Listener 
clearBtn.addEventListener("click", clearGrid);

hoverBtn.addEventListener("click", () => {
    currentMode = MODES.HOVER;
    gridContainer.innerHTML = "";
    modeInfo.innerHTML = `Mode: Hover`;
    drawGrid(gridSize);
});

rainbowBtn.addEventListener("click", () => {
    currentMode = MODES.RGB;
    gridContainer.innerHTML = "";
    modeInfo.innerHTML = `Mode: Rainbow`;
    drawGrid(gridSize);
});

createBtn.addEventListener("click", () => {
    let validGrid = true;

    let newGridSize = prompt("Please enter new grid from 16-100")
    if ((MIN_GRID <= newGridSize) && (newGridSize <= MAX_GRID)){
        validGrid = false;
    }

    while (validGrid) {
        newGridSize = prompt("Please enter new grid from 16-100"); 
        if ((MIN_GRID <= newGridSize) && (newGridSize <= MAX_GRID)){
            validGrid = false;
        }
    }

    gridSize = newGridSize;
    gridContainer.innerHTML = "";
    gridInfo.innerHTML = `Grid Size: ${gridSize} x ${gridSize}`;
    drawGrid(gridSize);
});

window.addEventListener("DOMContentLoaded", () => drawGrid(gridSize));