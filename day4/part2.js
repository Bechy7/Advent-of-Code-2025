import fs from 'fs';

let input = fs.readFileSync('day4/input.txt', 'utf-8').split('\n').map(line => line.split(''));
let result = 0;
let tempResult = 0;

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

do {
tempResult = 0;
for (let i = 0; i < input.length; i++) {
    const length = input[i].length;
    for (let j = 0; j < length; j++) {
        if (input[i][j] === '@' && isAccepted(i, j)) {
            input[i][j] = '.';
            tempResult++;
        }
    }
}
console.log(tempResult);
result += tempResult;
} while (tempResult > 0);


console.log(result);