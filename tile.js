class Tile {
    constructor(x, y, number, index) {
        this.x = x;
        this.y = y;
        this.targetX = this.x;
        this.targetY = this.y;
        this.number = number;
        this.index = index;
    }

    update() {
        if (this.number == 0) return;
        this.x = lerp(this.x, this.targetX, 0.2);
        this.y = lerp(this.y, this.targetY, 0.2);
    }

    draw() {
        if (this.number == 0) return;
        rectMode(CENTER);
        this.drawTile();
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



    moveTo(zeroTile) {
        let x = this.targetX;
        let y = this.targetY;
        let index = this.index;

        let zeroTileX = zeroTile.x;
        let zeroTileY = zeroTile.y;
        let zeroTileIndex = zeroTile.index;


        zeroTile.setTarget(x, y);
        zeroTile.x = x;
        zeroTile.y = y;
        zeroTile.index = index;

        this.setTarget(zeroTileX, zeroTileY);
        this.index = zeroTileIndex;
    }

    setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
    }
}