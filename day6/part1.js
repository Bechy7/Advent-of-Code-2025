import fs from 'fs';

const input = fs.readFileSync('day6/input.txt', 'utf-8').split('\n');

const numbers0 = (input[0].match(/\S+/g) || [].split(' ')).map(Number);
const numbers1 = (input[1].match(/\S+/g) || [].split(' ')).map(Number);
const numbers2 = (input[2].match(/\S+/g) || [].split(' ')).map(Number);
const numbers3 = (input[3].match(/\S+/g) || [].split(' ')).map(Number);
const symbols = (input[4].match(/\S+/g) || [].split(' '));

let result = 0;

for (let i = 0; i < numbers0.length; i++) {
    if (symbols[i] === '+') {
        result += (numbers0[i] + numbers1[i] + numbers2[i] + numbers3[i]);
    } else if (symbols[i] === '*') {
        result += (numbers0[i] * numbers1[i] * numbers2[i] * numbers3[i]);
    }
}

console.log(result);