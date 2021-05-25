class Puzzle {
    constructor(size) {
        this.size = size;
        this.numbers = this.createNumbers();
    }

    createNumbers() {
        let numbers = [];
        for (let i = 0; i < this.size * this.size; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    draw() {
        this.drawGrid();
        this.drawNumbers();
    }

    drawGrid() {
        for (let i = 0; i < width; i += width / this.size) {
            line(i, 0, i, height);
            for (let j = 0; j < height; j += height / this.size) {
                line(0, j, width, j);
            }
        }
    }

    drawNumbers() {
        textSize(30);
        textAlign(CENTER);
        let y = (height / this.size) / 2;
        let x = (width / this.size) / 2;
        for (let i = 0; i < this.numbers.length; i++) {
            text(this.numbers[i], x, y);
            x += width / this.size;
            if (i % this.size == 2) {
                x = (width / this.size) / 2;
                y += height / this.size;
            }
        }
    }
}