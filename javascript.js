/**
 * Etch-a-Sketch Project
 * 
 * This is a simple web-based drawing application inspired by the classic Etch-a-Sketch toy.
 * It creates a grid of squares that change color when the mouse hovers over them,
 * allowing users to draw by moving the cursor across the grid.
 * 
 * Features:
 * - Customizable grid size (up to 100x100)
 * - Hover-to-draw functionality
 * - Responsive grid that maintains container size
 * 
*/

// Selecting DOM elements
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

// Constants for initial grid configuration
const INITIALSIZE = 16;
const CONTAINERSIZE = 512; // Container size in pixels

let squaresPerSide = INITIALSIZE;
let totalSquares = squaresPerSide * squaresPerSide;

// Create the initial grid
createGrid(totalSquares);

function createGrid(totalSquares){
    // Clear previous grid
    container.textContent = '';
    const squareSize = CONTAINERSIZE / squaresPerSide;

    // Create and add each square to the grid
    for(let i = 0; i < totalSquares; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    // Add hover effect to each square
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
    square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "grey";
        });
    });
}

// Set up button to allow user to change grid size
button.addEventListener("click", setGridSize);

function setGridSize(){
    const newSquare = parseInt(prompt("How many squares per side would you like for the new grid?")); 
    
    // Check if size exceeds maximum limit
    if(newSquare > 100) {
        alert("You picked more than the max of 100");
        return;
    }
    
    // Update variables and recreate grid
    squaresPerSide = newSquare;
    totalSquares = squaresPerSide * squaresPerSide;
    createGrid(totalSquares);
    
}






