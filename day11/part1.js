import fs from 'fs';

const input = fs.readFileSync('day11/input.txt', 'utf-8').split('\n');
let result = 0;
goToDevice('you');
console.log(result);

function goToDevice(deviceName) {
    const outputs = getDevice(deviceName);
    if (outputs.includes('out') || outputs.includes('out\r')) {
        result++;
        return;
    }

    for (const output of outputs) {
        goToDevice(output);
    }
}

function getDevice(deviceName) {
    const line = input.filter((c) => c.startsWith(deviceName.replace(/\s/g, ""))); //Remove whitespace from deviceName
    const fields = line[0].split(' ');
    const outputs = fields.slice(1);
    return outputs;
}
