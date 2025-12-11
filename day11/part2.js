import fs from 'fs';

const input = fs.readFileSync('day11/input.txt', 'utf-8').split('\n');
const seenDevices = [];
let tempSeenDevices = [];
let result = 1;
let tempResult = 0;
result *= goToDevice('dac', 'out');
seenDevices.push(tempSeenDevices);
tempSeenDevices = [];
tempResult = 0;
result *= goToDevice('fft', 'dac');
seenDevices.push(tempSeenDevices);
tempSeenDevices = [];
tempResult = 0;
result *= goToDevice('svr', 'fft');
console.log(result);

function goToDevice(deviceName, endDevice) {
    if (seenDevices.includes(deviceName) || seenDevices.includes(`${deviceName}\r`)) return;
    if (!tempSeenDevices.includes(deviceName)) {
        tempSeenDevices.push(deviceName);
    }

    if (deviceName == 'out' || deviceName == 'out\r') return;
    const outputs = getDevice(deviceName);
    if (outputs.includes(endDevice) || outputs.includes(`${endDevice}\r`)) {
        tempResult++;
        return;
    }

    for (const output of outputs) {
        goToDevice(output, endDevice);
    }
    return tempResult;
}

function getDevice(deviceName) {
    const line = input.filter((c) => c.startsWith(deviceName.replace(/\s/g, ""))); //Remove whitespace from deviceName
    const fields = line[0].split(' ');
    const outputs = fields.slice(1);
    return (outputs);
}