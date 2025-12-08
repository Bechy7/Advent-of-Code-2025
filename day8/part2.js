import fs from 'fs';

const input = fs.readFileSync('day8/input.txt', 'utf-8').split('\n');
const coordinates = [];
const edges = [];

for (const line of input) {
    const [x, y, z] = line.split(',').map(Number);
    coordinates.push([x, y, z]);
}

for (let i = 0; i < coordinates.length; i++) {
    if (i == coordinates.length - 1) break;
    for (let j = i + 1; j < coordinates.length; j++) {
        const dist = Math.sqrt(Math.pow(Math.abs(coordinates[i][0] - coordinates[j][0]), 2) + Math.pow(Math.abs(coordinates[i][1] - coordinates[j][1]), 2) + Math.pow(Math.abs(coordinates[i][2] - coordinates[j][2]), 2));
        edges.push([coordinates[i], coordinates[j], dist]);
    }
}
edges.sort((a, b) => a[2] - b[2]);

let circuits = [];
let lastXCoordinates = [0,0];

for (let i = 0; i < edges.length; i++) {
    const [point1, point2] = edges[i];
    const index1 = getCircuitIndex(point1);
    const index2 = getCircuitIndex(point2);
    if (index1 > -1 && index2 > -1 && index1 !== index2) {
        circuits[index1].push(...circuits[index2]);
        circuits.splice(index2, 1);
    }
    else if (index1 > -1) {
        circuits[index1].push(point2);
    }
    else if (index2 > -1) {
        circuits[index2].push(point1);
    } else {
        circuits.push([point1, point2]);
    }

    if ([...new Set(circuits[0])].length == input.length) {
        lastXCoordinates = [point1[0], point2[0]];
        break;
    }
}

const result = lastXCoordinates[0] * lastXCoordinates[1];
console.log(result);

function getCircuitIndex(point) {
    return circuits.findIndex((circuit) => {
        return circuit.some((p) => {
            return p[0] === point[0] && p[1] === point[1] && p[2] === point[2]
        });
    });
}