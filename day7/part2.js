import fs from 'fs';

const input = fs.readFileSync('day7/input.txt', 'utf-8').split('\n');
let newInput = input.map(line => line.replaceAll('.', '0').split(''));

let result = 0;

for (let i = 0; i < newInput.length; i++) {
    for (let j = 0; j < newInput[i].length; j++) {
        const char = newInput[i][j];
        if (i === newInput.length - 1 && char) {
            result += Number(char);
            continue;
        }

        try {
            switch (char) {
                case '.':
                    continue;
                case 'S':
                    newInput[i + 1][j] = '1';
                    break;
                case '^':
                    newInput[i + 1][j - 1] = Number(newInput[i + 1][j - 1]) + Number(newInput[i - 1][j]);
                    newInput[i + 1][j + 1] = Number(newInput[i + 1][j + 1]) + Number(newInput[i - 1][j]);
                    break;
                default:
                    if (newInput[i + 1][j] !== '^') {
                        newInput[i + 1][j] = Number(newInput[i + 1][j]) + Number(char);
                    }
                    break;
            }
        } catch (error) { }
    }
}

console.log(result);