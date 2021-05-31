class BFS {
    constructor() {

    }
    solve(puzzle, goal) {
        console.log(puzzle, goal);
        let seen = [puzzle];
        let queue = [puzzle];
        while(queue.length > 0) {
            let current = queue.shift();

            if (this.isEqual(current, goal)) {
                console.log('Found goal', current);
                return;
            }

            for (let neighbour of Puzzle.getNeighbours(current)) {
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

    isInSeen(seen, neighbour) { 
        for (let alreadySeen of seen) {
            if (this.isEqual(alreadySeen, neighbour)) {
                return true;
            }
        }
        return false;
    }
}