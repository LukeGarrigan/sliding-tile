class SearchAlgorithm {
    constructor() {
    }

    set(algorithm) {
        this.algorithm = algorithm;
    }

    solve(puzzle, goal) {
        return this.algorithm.solve(puzzle, goal)
    }
}