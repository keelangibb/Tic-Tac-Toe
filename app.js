let cells = document.querySelectorAll('.row > div')
let turn = 0
let winner = document.querySelector('.winner')
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
function cellClicked() {
    if (turn % 2 == 0) {
        event.target.textContent = 'X';
        turn++
        event.target.removeEventListener('click', cellClicked)
        checkWin()
    } else {
        event.target.textContent = 'O'
        turn++
        event.target.removeEventListener('click', cellClicked)
        checkWin()
    }
}
function checkWin() {
    if (turn >= 3) {
        if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') { //row 1 O -
            O()
        } else if ((cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X')) { //row 1 X -
            X()
        } else if ((cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O')) { //row 2 O -
            O()
        } else if ((cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X')) { //row 2 X -
            X()
        } else if ((cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O')) { //row 3 O -
            O()
        } else if ((cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X')) { //row 3 X -
            X()
        } else if ((cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O')) { //column 1 O -
            O()
        } else if ((cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X')) { //column 1 X -
            X()
        } else if ((cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O')) { // column 2 O -
            O()
        } else if ((cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X')) { // column 2 X -
            X()
        } else if ((cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O')) { // column 3 O -
            O()
        } else if ((cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X')) { // column 3 X -
            X()
        } else if ((cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O')) { // diagonal top left to bottom right O -
            O()
        } else if ((cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X')) { // diagonal top left to bottom right X -
            X()
        } else if ((cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O')) { // diagonal top right to bottom left O -
            O()
        } else if ((cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X')) { // diagonal top right to bottom left X -
            X()
        } else if (turn == 9) {
            draw()
        }
    }
}
function X() {
    for (let i = 0; i < 9; i++) {
        winner.textContent = 'X Won!';
        cells[i].removeEventListener('click', cellClicked)
        cells[i].addEventListener('click', clearCells)
    }
}
function O() {
    for (let i = 0; i < 9; i++) {
        winner.textContent = 'O Won!';
        cells[i].removeEventListener('click', cellClicked)
        cells[i].addEventListener('click', clearCells)
    }
}
function draw() {
    for (let i = 0; i < 9; i++) {
        winner.textContent = 'Draw :(';
        cells[i].removeEventListener('click', cellClicked)
        cells[i].addEventListener('click', clearCells)
    }
}
function clearCells() {
    location.reload();
}