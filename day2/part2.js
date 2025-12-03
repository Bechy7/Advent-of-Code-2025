import fs from 'fs';

const input = fs.readFileSync('day2/input.txt', 'utf-8').split(',');

const isRepeatedPattern = (str) => {
  return (str + str).indexOf(str, 1) !== str.length;
}

let result = 0;
for (const idRange of input) {
    const [min, max] = idRange.split('-').map(Number);
    let current = min;
    while (current < max) {
        if (isRepeatedPattern(current.toString())) { 
            result += current;
        }
        current++;
    }
}
console.log(result);

