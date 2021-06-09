class Puzzle {
    constructor() {
        this.tiles = this.createTiles();
        this.previousMove = -1;
        this.moveCount = 0;
        this.goal = this.generateGoal();
    }

    createTiles() {
        let tiles = [];
        let x = width / PUZZLE_SIZE / 2;
        let y = height / PUZZLE_SIZE / 2;
        for (let i = 0; i < PUZZLE_SIZE * PUZZLE_SIZE; i++) {
            tiles.push(new Tile(x, y, i, i));
            x += width / PUZZLE_SIZE;
            if (i % PUZZLE_SIZE == PUZZLE_SIZE - 1) {
                x = width / PUZZLE_SIZE / 2;
                y += height / PUZZLE_SIZE;
            }
        }
        return tiles;
    }

    generateGoal() {
        let goal = [];
        for (let i = 0; i < this.tiles.length; i++) {
            goal.push(i);
        }
        return goal;
    }

    update() {
        for (let tile of this.tiles) {
            tile.update();
        }
    }

    draw() {
        for (let tile of this.tiles) {
            tile.draw();
        }
    }

    movePiece(mouseX, mouseY) {
        let smallest = Infinity;
        let num = -1;
        let tileToMove;
        for (let tile of this.tiles) {
            let distance = dist(mouseX, mouseY, tile.x, tile.y);
            if (distance < smallest) {
                smallest = distance;
                num = tile.number;
                tileToMove = tile;
            }
        }
        if (smallest < 150) {
            const zeroTile = this.tiles.find(t => t.number === 0);
            if (this.isMoveable(tileToMove.index)) {
                tileToMove.moveTo(zeroTile);
            }
        }
        
    }

    moveRandomTile() {
        if (this.moveCount >= MOVES_FROM_GOAL) return;
        let moved = false;
        while(!moved) {
            let number = floor(random(this.tiles.length));
            const zeroTile = this.tiles.find(t => t.number === 0);
            const tile = this.tiles.find(t => t.number === number);
            if (number != this.previousMove && this.isMoveable(tile.index)) {
                tile.moveTo(zeroTile);
                moved = true;
                this.previousMove = tile.number;
                this.moveCount++;
            }
        }
    }


    isMoveable(index) {
        let moves = this.findLegalMoves();

        if (moves.includes(index)) {
            return true;
        }
        return false;
    }

    findLegalMoves() {
        const zeroTile = this.tiles.find(t => t.number === 0);
        let indexes = [];
        // can move left
        if (zeroTile.index % PUZZLE_SIZE != 0) {
            indexes.push(zeroTile.index - 1);
        }

        // can move right
        if (zeroTile.index % PUZZLE_SIZE != PUZZLE_SIZE-1) {
            indexes.push(zeroTile.index + 1);
        }

        // can move up
        if (zeroTile.index >= PUZZLE_SIZE) {
            indexes.push(zeroTile.index - PUZZLE_SIZE);
        }

        // can move down
        if (zeroTile.index < PUZZLE_SIZE*PUZZLE_SIZE-PUZZLE_SIZE) {
            indexes.push(zeroTile.index + PUZZLE_SIZE);
        }
        return indexes;
    }

    static getNeighbours(current) {
        const zeroTileIndex = current.findIndex(t => t === 0);
        let states = [];
        // can move left
        if (zeroTileIndex % PUZZLE_SIZE != 0) {
            let copy = current.slice();
            let tileToMove = copy[zeroTileIndex-1];
            copy[zeroTileIndex] = tileToMove;
            copy[zeroTileIndex-1] = 0;
            states.push(copy);
        }

        // can move right
        if (zeroTileIndex % PUZZLE_SIZE != PUZZLE_SIZE-1) {
            let copy = current.slice();
            let tileToMove = copy[zeroTileIndex+1];
            copy[zeroTileIndex] = tileToMove;
            copy[zeroTileIndex+1] = 0;
            states.push(copy);
        }

        // can move up
        if (zeroTileIndex >= PUZZLE_SIZE) {
            let copy = current.slice();
            let tileToMove = copy[zeroTileIndex - PUZZLE_SIZE];
            copy[zeroTileIndex] = tileToMove;
            copy[zeroTileIndex - PUZZLE_SIZE] = 0;
            states.push(copy);
        }

        // can move down
        if (zeroTileIndex < PUZZLE_SIZE*PUZZLE_SIZE-PUZZLE_SIZE) {
            let copy = current.slice();
            let tileToMove = copy[zeroTileIndex + PUZZLE_SIZE];
            copy[zeroTileIndex] = tileToMove;
            copy[zeroTileIndex + PUZZLE_SIZE] = 0;
            states.push(copy);
        }
        return states;
    }


    toArray() {
        const indexes = this.tiles.map(t => t.index);
        let arr = [];
        for (let i = 0; i < indexes.length; i++) {
            const index = indexes.indexOf(i);
            arr.push(index);
        }
        return arr;
    }

    // victory lap code
    moveTilesToGoal(state) {
        this.goalArray = this.mapToArray(state);
    }

    moveTowardGoal() {
        if (!this.goalArray || this.goalArray.length < 2) return; 
        this.goalArray.pop();
        let move = this.goalArray[this.goalArray.length-1];
        let zeroIndexGoal = move.current.findIndex(m => m === 0);
        const zeroTile = this.tiles.find(t => t.number === 0);
        let tileToMove = this.tiles.find(t => t.index === zeroIndexGoal);
        tileToMove.moveTo(zeroTile);
    }

    mapToArray(goal) {
        let arr = [goal];
        let current = goal.previous;
        if (current == null) return arr;
        do {
            arr.push(current);
            current = current.previous;
        } while (current != null) 
            
        return arr;
    }
    
} 