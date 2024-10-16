function validSolution(board) {
    const firstValue = 1;
    const lastValue = 9;
    const numOfRowsColsBlocks = 9;
    const numOfRowsColsInBlock = 3;
    const rows = new Array(numOfRowsColsBlocks).fill(null).map(() => new Set());
    const cols = new Array(numOfRowsColsBlocks).fill(null).map(() => new Set());
    const blocks = new Array(numOfRowsColsBlocks).fill(null).map(() => new Set());

    for (let row = 0; row < numOfRowsColsBlocks; row++) {
        for (let col = 0; col < numOfRowsColsBlocks; col++) {
            const value = board[row][col];

            if (value === 0) {
                return false
            }

            const blockIndex = (Math.floor(row / numOfRowsColsInBlock) * numOfRowsColsInBlock) + Math.floor(col / numOfRowsColsInBlock);

            if ( !Number.isInteger(value) ||
                value > lastValue ||
                value < firstValue ||
                rows[row].has(value) ||
                cols[col].has(value) ||
                blocks[blockIndex].has(value)
            ) {
                return false;
            }

            rows[row].add(value);
            cols[col].add(value);
            blocks[blockIndex].add(value);
        }
    }
    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]));
