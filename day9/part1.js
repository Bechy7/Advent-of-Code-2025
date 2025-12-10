import fs from 'fs';

const input = fs.readFileSync('day9/input.txt', 'utf-8').split('\n');
let biggestArea = 0;

for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        const [x1, y1] = input[i].split(',');
        const [x2, y2] = input[j].split(',');
        const area = (Math.abs(x1 - x2) + 1) * ((Math.abs(y1 - y2) + 1));
        if (area > biggestArea) {
            biggestArea = area;
        }
    }
}

console.log(biggestArea);