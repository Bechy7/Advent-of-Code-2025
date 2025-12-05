import fs from 'fs';

const freshRanges = fs.readFileSync('day5/freshRanges.txt', 'utf-8').split('\n');
const sortedRanges = freshRanges.sort((a, b) => {
    const [aMin, aMax] = a.split('-').map(Number);
    const [bMin, bMax] = b.split('-').map(Number);
    if (aMin < bMin) return -1;
    if (aMin > bMin) return 1;
    if (aMax < bMax) return -1;
    if (aMax > bMax) return 1;
    return 0;
});

let result = 0;
for (let i = 0; i < sortedRanges.length; i++) {
    const [min, max] = sortedRanges[i].split('-').map(Number);
    //If this is the last index, we can't compare with the next one
    if (i === sortedRanges.length - 1) {
        result += (max - min + 1);
        break;
    }

    const [nextMin, nextMax] = sortedRanges[i + 1].split('-').map(Number);
    if (max < nextMin) {
        result += (max - min + 1);
    } else {
        sortedRanges[i + 1] = `${Math.min(min, nextMin)}-${Math.max(max, nextMax)}`;
    }
}

console.log(result);