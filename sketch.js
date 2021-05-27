const PUZZLE_SIZE = 3;
let puzzle;
function setup() {
    createCanvas(700, 700);
    puzzle = new Puzzle();
}

function draw() {
    background(235, 236, 209);
    puzzle.update();
    puzzle.draw();
}

function mousePressed() {
    puzzle.movePiece(mouseX, mouseY);
}