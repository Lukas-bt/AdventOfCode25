import * as fs from 'fs';

function turn(direction: 'L' | 'R', degree: number, actualDegree: number): number {
    if (direction === 'L') {
        return (actualDegree - degree) % 100 < 0 ? 100 + (actualDegree - degree) % 100 : (actualDegree - degree) % 100;
    } else {
        return (actualDegree + degree) % 100 < 0 ? 100 + (actualDegree + degree) % 100 : (actualDegree + degree) % 100;
    }
}


function main(filePath: string): number {
    const content: string = fs.readFileSync(filePath, 'utf-8');
    const lines: string[] = content.split(/\r?\n/);
    let actualDegree = 50;
    let nbOnZero = 0;
    for(const line of lines) {
        const direction = line.slice(0, 1) as 'L' | 'R';
        const degree : number = parseInt(line.slice(1), 10);
        actualDegree = turn(direction, degree, actualDegree);
        if (actualDegree === 0) {
            nbOnZero += 1;
        }
    }
    return nbOnZero;
}

console.log("Résultat Day 1 : " + main('./day1/input.txt'));

export { main };


