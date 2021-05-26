class Tile {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }


    draw() {
        if (this.number == 0) {
            this.drawEmptyTile();
        } else {
            this.drawTile();
        }
    }

    drawTile() {
        fill(42, 157, 244);
        rect(this.x, this.y, width/PUZZLE_SIZE, height/PUZZLE_SIZE);

        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text(this.number, this.x + width/PUZZLE_SIZE/2, this.y + height/PUZZLE_SIZE/2);
    }

    drawEmptyTile() {
        fill(208, 239, 255);
        rect(this.x, this.y, width/PUZZLE_SIZE, height/PUZZLE_SIZE);
    }
}