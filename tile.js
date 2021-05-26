class Tile {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }


    draw() {
        rect(this.x, this.y, width/PUZZLE_SIZE, height/PUZZLE_SIZE);
        textAlign(CENTER);
        textSize(50);
        text(this.number, this.x + width/PUZZLE_SIZE/2, this.y + height/PUZZLE_SIZE/2);
    }
}