import fs from 'fs';

let result = 0;
const input = fs.readFileSync('day3/input.txt', 'utf-8').split('\n');

const getBiggestDigit = (num) => {
    return Math.max(...num.split('')).toString();
}

for (const bank of input) {
    const firstSlice = bank.substring(0, bank.length - 2);
    const firstDigit = getBiggestDigit(firstSlice);

    const lastSlice = bank.substring(bank.indexOf(firstDigit) + 1);
    const lastDigit = getBiggestDigit(lastSlice);
    result += Number(firstDigit + lastDigit);
    console.log(result);
}