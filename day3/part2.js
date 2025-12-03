import fs from 'fs';

let result = 0;
const input = fs.readFileSync('day3/input.txt', 'utf-8').split('\n');

const getBiggestDigit = (num) => {
    return Math.max(...num.split('')).toString();
}

for (const bank of input) {
    console.log(bank);
    let currentSlice = bank;
    let resultDigits = "";
    let lastDigit = "0";
    for (let i = 12; i >= 1; i--) {
        if (i === 12) {
            currentSlice = currentSlice.substring(0, currentSlice.length - i);
        } else {
            currentSlice = currentSlice.substring(currentSlice.indexOf(lastDigit) + 1) + bank.charAt(bank.length - i - 1);
        }
        lastDigit = getBiggestDigit(currentSlice);
        resultDigits += lastDigit;
        console.log(currentSlice);
        console.log(resultDigits);
    }

    result += Number(resultDigits);
    console.log(result);
}