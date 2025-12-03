import fs from 'fs';

let result = 0;
const input = fs.readFileSync('day2/input.txt', 'utf-8').split(',');

for (const idRange of input) {
    const [min, max] = idRange.split('-').map(Number);
    let current = min;
    while (current < max) {
        const length = current.toString().length;
        if (length % 2 !== 0) {
            current = Math.pow(10, length);
        }

        const half = current.toString().substring(0, length / 2);
        if (half + half === current.toString()) {
            result += current;
        }
        current++;
    }
}
console.log(result);

