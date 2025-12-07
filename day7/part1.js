import fs from 'fs';

const input = fs.readFileSync('day7/input.txt', 'utf-8').split('\n');
let newInput = input.map(line => line.split(''));

let result = 0;

for (let i = 0; i < newInput.length; i++) {
    for (let j = 0; j < newInput[i].length; j++) {
        const char = newInput[i][j];
        try {
            switch (char) {
                case '.':
                    continue;
                case 'S':
                    newInput[i + 1][j] = '|';
                    break;
                case '^':
                    if (newInput[i - 1][j] === '|') {
                        newInput[i + 1][j - 1] = '|';
                        newInput[i + 1][j + 1] = '|';
                        result++;
                    }
                    break;
                case '|':
                    if (newInput[i + 1][j] === '.') {
                        newInput[i + 1][j] = '|';
                    }
                    break;
            }
        } catch (error) { }
    }
}

console.log(result);