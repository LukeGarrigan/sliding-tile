class Puzzle {
    constructor(size) {
        this.size = size;
        this.numbers = this.createNumbers();
    }

    createNumbers() {
        let numbers = [];
        for (let i = 0; i < this.size*this.size; i++) {
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
        let y = 10;
        let x = 10;
        for (let i = 0; i < this.numbers.length; i++) {
            text(this.numbers[i], x, y);
            x += width / this.size;
            if (i % this.size == 2) {
                x = 0;
                y += height/this.size;
            }
        }
    }
}