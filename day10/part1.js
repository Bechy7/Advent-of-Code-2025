import fs from 'fs';

const input = fs.readFileSync('day10/input.txt', 'utf-8').split('\n');

for (const line of input) {
    const line1 = line.split(']');
    const lights = line1[0].substring(1);
    const switches = line1[1].split('{')[0];
    console.log(lights, switches);
}