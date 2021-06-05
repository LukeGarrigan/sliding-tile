class BFS {
    constructor() {

    }
    solve(puzzle, goal) {
        console.log(puzzle, goal);
        puzzle = new State(null, puzzle);

        let seen = [puzzle];
        let queue = [puzzle];
        while(queue.length > 0) {
            let state = queue.shift();
            if (this.isEqual(state.current, goal)) {
                console.log('Found goal', state);
                return {
                    state,
                    expanded: seen.length
                }
            }

            for (let neighbour of Puzzle.getNeighbours(state.current)) {
                neighbour = new State(state, neighbour);

                if (!this.isInSeen(seen, neighbour)) {
                    seen.push(neighbour);
                    queue.push(neighbour);
                } 
            }
        }
        console.log('finished');
    }

    isEqual(current, goal) {
        for (let i = 0; i < current.length; i++) {
            if (current[i] !== goal[i]) {
                return false;
            }
        }
        return true;
    }

    isInSeen(seen, neighbourState) { 
        for (let alreadySeen of seen) {
            if (this.isEqual(alreadySeen.current, neighbourState.current)) {
                return true;
            }
        }
        return false;
    }
}