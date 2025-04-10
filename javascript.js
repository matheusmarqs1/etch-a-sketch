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
const INITIAL_SQUARE_PER_SIDE = 16;
const CONTAINER_SIZE = 512; // Container size in pixels

// Create the initial grid
let squaresPerSide = INITIAL_SQUARE_PER_SIDE;
createGrid(squaresPerSide);

function createGrid(squaresPerSide){

    // Clear previous grid
    container.textContent = '';
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = 100 / squaresPerSide; // Calculates the percentage width of each square to exactly fill the container
    

    // Create and add each square to the grid
    for(let i = 0; i < totalSquares; i++){

        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        container.appendChild(square);
    }
    // Add hover effect to each square
    applyHoverEffect();
    
}

function applyHoverEffect(){
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
    square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 255) + 1;
            const g = Math.floor(Math.random() * 255) + 1;
            const b = Math.floor(Math.random() * 255) + 1;

            square.style.backgroundColor = "rgb(" + `${r}` + ", "  + `${g}` + ", " + `${b}` + ")";
        });
    });
}

// Set up button to allow user to change grid size
button.addEventListener("click", setGridSize);

function setGridSize(){
    const newSquaresPerSide = parseInt(prompt("How many squares per side would you like for the new grid?")); 

    // Check if squares per side exceeds maximum limit
    if(isNaN(newSquaresPerSide) || (newSquaresPerSide <= 0) || (newSquaresPerSide > 100)) {
        alert("Invalid choice!!! Please enter a number between 1 and 100 only.");
        return;
    }
    
    // Recreate grid
    createGrid(newSquaresPerSide);
    
}

