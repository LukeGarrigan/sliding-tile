class Tile {
    constructor(x, y, number, index) {
        this.x = x;
        this.y = y;
        this.number = number;
        this.index = index;
    }


    draw() {
        rectMode(CENTER);
        if (this.number == 0) {
            this.drawEmptyTile();
        } else {
            this.drawTile();
        }
    }

    drawTile() {
        fill(119, 149, 90)
        rect(this.x, this.y, width/PUZZLE_SIZE, height/PUZZLE_SIZE);

        textAlign(CENTER, CENTER);
        stroke(1);
        textSize(50);
        fill(255);
        text(this.number, this.x, this.y);
    }

    drawEmptyTile() {
        fill(235, 236, 209)
        rect(this.x, this.y, width/PUZZLE_SIZE, height/PUZZLE_SIZE);
    }

    moveTo(zeroTile) {
        let x = this.x;
        let y = this.y;
        let index = this.index;

        this.x = zeroTile.x;
        this.y = zeroTile.y;
        this.index = zeroTile.index;

        zeroTile.x = x;
        zeroTile.y = y;
        zeroTile.index = index;
    }
}