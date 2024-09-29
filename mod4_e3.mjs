import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


/*Zorg ervoor dat het script het volgende gaat uitprinten:
alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.*/
let start;
let end;
let deler1;
let deler2;
let deelbaar1;
let deelbaar2;

/* Zorg ervoor dat je aan de hand van de variabelen deelbaar1 en deelbaar2 kan kiezen of een getal wel of niet deelbaar moet zijn door deler1 of deler2 om ze weer te geven. */

start = parseFloat(await userInput.question('Met welk getal gaan we beginnen? '));
end = parseFloat(await userInput.question('Met welk getal gaan we eindigen? '));
deler1 = parseFloat(await userInput.question('Deler één: '));
deler2 = parseFloat(await userInput.question('Deler twee: '));

deelbaar1 = await userInput.question('Wil je delen door deler één? j/n: ');
deelbaar2 = await userInput.question('Wil je delen door deler twee? j/n: ');

// Hier zetten we de variabelen om in booleans
deelbaar1 = (deelbaar1 === 'j');
deelbaar2 = (deelbaar2 === 'j');

// Loop from start to end
for (let i = start; i <= end; i++) {
    if (deelbaar1 && deelbaar2) {
        
        if (i % deler1 === 0 && i % deler2 === 0) {
            console.log(i + ' is deelbaar door ' + deler1 + ' en ' + deler2);
       
    } else if (deelbaar1) {
        if (i % deler1 === 0) {
            console.log(i + ' is enkel deelbaar door ' + deler1);
        } 

    } else if (deelbaar2) {
        if (i % deler2 === 0) {
            console.log(i + ' is enkel deelbaar door ' + deler2);
        }
    }
}
}

process.exit()