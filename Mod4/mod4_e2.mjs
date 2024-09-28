import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*Zorg ervoor dat het script het volgende gaat uitprinten:
alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.*/

let start;
let end;
let deler1;
let deler2;
start = parseFloat(await userInput.question('Met welk getal gaan we beginnen?: '));
end = parseFloat(await userInput.question('Met welk getal gaan we eindigen?: '));
deler1 = parseFloat(await userInput.question('Deler één: '));
deler2 = parseFloat(await userInput.question('Deler twee: '));

for(start; start <= end; start ++){
    if(start % deler1 === 0) 
        if(start % deler2 === 0){
            console.log(start)
        }
        
}



process.exit()