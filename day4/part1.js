import fs from 'fs';

const input = fs.readFileSync('day4/input.txt', 'utf-8').split('\n');
let result = 0;

const isAccepted = (col, row) => {
    let adjacentPapers = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if ((i === 0 && j === 0) || col + i < 0 || row + j < 0 || col + i >= input.length || row + j >= input[col].length) continue;
            if (input[col + i][row + j] === '@') {
                adjacentPapers++;
            }
        }
    }
    return adjacentPapers < 4;
}

for (let i = 0; i < input.length; i++) {
    const length = input[i].length;
    for (let j = 0; j < length; j++) {
        if (input[i][j] === '@' && isAccepted(i, j)) {
            result++;
        }
    }
}

console.log(result);