class Puzzle {
    constructor() {
        this.tiles = this.createTiles();
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

        const zeroTile = this.tiles.find(t => t.number === 0);
        if (this.tileIsMoveable(tileToMove, zeroTile)) {
            tileToMove.moveTo(zeroTile);
        }
    }

    tileIsMoveable(tile, zeroTile) {
        if (abs(tile.index - zeroTile.index) == 1) {
            return true;
        } else if (abs(tile.index - zeroTile.index) == PUZZLE_SIZE) {
            return true;
        }
    }
}