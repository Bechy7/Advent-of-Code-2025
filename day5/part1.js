import fs from 'fs';

const freshRanges = fs.readFileSync('day5/freshRanges.txt', 'utf-8').split('\n');
const ingredientIds = fs.readFileSync('day5/ingredientIds.txt', 'utf-8').split('\n');

let result = 0;
ingredients: for (const id of ingredientIds) {
    for (const freshRange of freshRanges) {
        const [min, max] = freshRange.split('-').map(Number);
        if (id >= min && id <= max) {
            result++;
            continue ingredients;
        }
    }
}

console.log(result);