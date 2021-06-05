const PUZZLE_SIZE = 3;
const MOVES_FROM_GOAL = 10;
const ALGORITHM = 'BFS';
let puzzle;
let canvas;
function setup() {
    canvas = createCanvas(700, 700);
    canvas.parent("canvas-container");
    puzzle = new Puzzle();
}

function draw() {
    background(235, 236, 209);
    puzzle.update();
    puzzle.draw();

    if (frameCount % 30 == 0) {
        puzzle.moveRandomTile();
        puzzle.moveTowardGoal();
    }
}

function mousePressed() {
    puzzle.movePiece(mouseX, mouseY);
}


function keyPressed() {
    if (keyCode === 82) { // r
        moveRandomly = !moveRandomly;
    }

    if (keyCode === 32) {
        solvePuzzle();
    }
}

function solvePuzzle() {
    const searchAlgorithm = new SearchAlgorithm();
    if (ALGORITHM === 'BFS') {
        searchAlgorithm.set(new BFS());
    }

    let before = new Date();
    let goal = searchAlgorithm.solve(puzzle.toArray(), puzzle.goal);
    puzzle.moveTilesToGoal(goal.state);
    let moveCount = getMoveCount(goal.state);

    let elapsed = new Date() - before;
    const time = document.getElementById('time');
    const moves = document.getElementById('moves');
    const algorithm = document.getElementById('algorithm');
    const expanded = document.getElementById('expanded');
    algorithm.textContent = `Algorithm: ${ALGORITHM}`
    time.textContent = ` Time: ${elapsed / 1000}s`;
    moves.textContent = ` Moves: ${moveCount}`;
    expanded.textContent = `States expanded: ${goal.expanded}`;
    console.log(elapsed / 1000);
}

function getMoveCount(goal) {

    let count = 1;
    let current = goal.previous;
    while (current != null) {
        current = current.previous;
        count++;
    }
    return count;
}
