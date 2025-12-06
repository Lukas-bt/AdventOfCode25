import * as fs from 'fs';

function main(filePath: string): number {
    let somme = 0;
    let ranges = fs.readFileSync(filePath, 'utf-8').split(",");

    for(const range of ranges){
        const [min, max] = range.split("-").map(Number);
        for(let i = min; i <= max; i++){
            let nbStr = i.toString();
            if(nbStr.length % 2 != 0) continue;
            if(nbStr.slice(0, nbStr.length/2) == nbStr.slice(nbStr.length/2, nbStr.length)) somme += i;
        }
        
    }


    return somme;
}

console.log("Résultat Day 2 : " + main('./day2/input.txt'));


export { main };