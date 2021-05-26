const PUZZLE_SIZE = 4;
let puzzle;
function setup() {
    createCanvas(700, 700);
    puzzle = new Puzzle();
}

function draw() {
    background(220);
    puzzle.draw();
}

function mousePressed() {
    puzzle.movePiece(mouseX, mouseY);
}