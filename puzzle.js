class Puzzle {
    constructor() {
        this.tiles = this.createTiles();
    }

    createTiles() {
        let tiles = [];
        let x = 0;
        let y = 0;
        for (let i = 0; i < PUZZLE_SIZE * PUZZLE_SIZE; i++) {
            tiles.push(new Tile(x, y, i));
            x += width / PUZZLE_SIZE;
            if (i % PUZZLE_SIZE == PUZZLE_SIZE - 1) {
                x = 0;
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
}