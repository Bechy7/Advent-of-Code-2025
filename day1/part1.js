import fs from 'fs';

const commands = fs.readFileSync('day1/input.txt', 'utf-8').split('\n');

let result = 0;
let pointingNumber = 50;
for (const command of commands) {
    const amountOfTurns = Number(command.substring(1));
    if (command.charAt(0) === "R") {
        pointingNumber += amountOfTurns;
    } else {
        pointingNumber -= amountOfTurns;
    }

    if (pointingNumber % 100 == 0) {
        result += 1;
    }
}

console.log(result);