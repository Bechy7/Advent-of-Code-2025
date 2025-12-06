import fs from 'fs';

const input = fs.readFileSync('day6/input.txt', 'utf-8').split('\n');

const numbers0 = input[0];
const numbers1 = input[1];
const numbers2 = input[2];
const numbers3 = input[3];
const symbols = input[4];
let multiply = false;
let result = 0;
const numbers = [];

for (let i = 0; i < numbers0.length; i++) {
    const tempNumbers = [];
    tempNumbers.push(numbers0[i] + numbers1[i] + numbers2[i] + numbers3[i]);
    numbers.push(Number(tempNumbers));
}

let addition = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) continue;
    if (symbols[i] === '*') {
        multiply = true;
        result += addition;
        addition = 1;
    } else if (symbols[i] === '+') {
        multiply = false;
        result += addition;
        addition = 0;
    }
    if (multiply) {
        console.log(addition + " * " + numbers[i] + " = " + (addition * numbers[i]));
        addition *= numbers[i];
    } else {
        console.log(addition + " + " + numbers[i] + " = " + (addition + numbers[i]));
        addition += numbers[i];
    }
}
result += addition;
console.log(result);