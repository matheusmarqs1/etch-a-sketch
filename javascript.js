const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
}
    
const squares = document.querySelectorAll(".grid-square");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "grey";
    });
});

    






