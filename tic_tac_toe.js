// Restarting the game 

let restart = document.getElementById('restartButton');
let squares = document.querySelectorAll('td');

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

restart.addEventListener("click",clearBoard);

// Changing the markers

function changeMarkers() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }
    else if (this.textContent === 'X') {
        this.textContent = 'O';
    }
    else {
        this.textContent = '';
    }    
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click",changeMarkers);
    
}

