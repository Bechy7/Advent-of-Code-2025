import fs from 'fs';
const input = fs.readFileSync('day12/input.txt', 'utf-8').split('\n');
const shapes = [`
#.#
#.#
###
`, `
###
.#.
###
`, `
###
##.
.##
`, `
###
.##
..#
`, `
###
###
#..
`, `
.##
##.
#..
`
]

let result = 0;
let impossible = 0;

for (const line of input) {
    const splitLine = line.split(' ');
    let [x, y] = splitLine[0].split('x');
    y = y.slice(0, -1);
    let spotsOppupied = 0;
    let fullSize = 0;
    for (let i = 0; i < shapes.length; i++) {
        const shapeLength = (shapes[i].match(/#/g) || []).length;
        spotsOppupied += shapeLength * splitLine[i + 1];
        fullSize += 9 * splitLine[i + 1];
    }

    if (spotsOppupied > x * y) {
        impossible++;
    }

    else if (fullSize <= x * y) {
        result++;
    }
}
console.log(result);
console.log(impossible);