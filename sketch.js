let puzzle;
function setup() {
    createCanvas(700, 700);
    puzzle = new Puzzle(3);
}

function draw() {
    background(220);
    puzzle.draw();
}