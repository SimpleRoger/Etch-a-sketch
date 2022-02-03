function makeGrid (size) {
    let tbl = document.getElementById('pixelCanvas');
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
    let table = document.querySelector("#pixelCanvas");
    let square = table.querySelectorAll("tr > td");
    for (let i = 0; i < square.length; i++) {
    square.item(i).addEventListener("mouseenter", function(event) {
        event.target.style.background = "red";
        console.log('hi')
    }, false);  }

    console.log(square);
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


