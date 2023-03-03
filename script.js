let color = 'black';
let click = true;
var toggle = false;
function makeGrid (size) {
    if (size < 0 || size > 50) {
        return;
    }
    document.querySelector(".error").style.display = "none";
    let tbl = document.getElementById('pixelCanvas');
    let squares = tbl.querySelectorAll("tr");
    squares.forEach((td) => td.remove());

    for(let i=0; i<size; i++) {
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;
        tbl.appendChild(myRow);
        let row = document.getElementById("row" + i)
        for(let j=0; j<size; j++) {
            let myCell = document.createElement("td");
            row.appendChild(myCell)
        }
    }
    let square = tbl.querySelectorAll("tr > td");
    for (let i = 0; i < square.length; i++) {
        square.item(i).addEventListener("mouseover", colorSquare)
        console.log(square);
    }
}

function removeGrid() {
    let tbl = document.getElementById('pixelCanvas');
    let square = tbl.querySelectorAll("tr");
    for (let i = 0; i < square.length; i++) {
        square.item(i).remove() 
    }
    let number = prompt("Please the number of squares per side for your new grid");
    makeGrid(number);

}

function colorSquare() {
    if (click) {
        if (color === "random") {
            console.log('hi');
            this.style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}


document.querySelector("html").addEventListener("click", (e) => {
    if (e.target.tagName !="BUTTON") {
        //assinging it to 
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Paint on"
        } else {
            document.querySelector('.mode').textContent = "Paint off"
        }
    }

});