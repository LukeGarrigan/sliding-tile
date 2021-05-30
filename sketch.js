const PUZZLE_SIZE = 3;
const MOVES_FROM_GOAL = 20;
const ALGORITHM = 'BFS';
let puzzle;
function setup() {
    createCanvas(700, 700);
    puzzle = new Puzzle();
}

function draw() {
    background(235, 236, 209);
    puzzle.update();
    puzzle.draw();

    if (frameCount % 30 == 0) {
        puzzle.moveRandomTile();
    }
}

function mousePressed() {
    puzzle.movePiece(mouseX, mouseY);
}


function keyPressed() {
    console.log(keyCode);

    if (keyCode === 82) { // r
        moveRandomly = !moveRandomly;
    }

    if (keyCode === 32) {
        const searchAlgorithm = new SearchAlgorithm();
        if (ALGORITHM === 'BFS') {
            searchAlgorithm.set(new BFS());
        }

        searchAlgorithm.solve(puzzle);
    }
}