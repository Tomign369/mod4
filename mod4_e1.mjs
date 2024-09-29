import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('geef de hoogte in: '))/home/tom/repos/Programming-essentials1/Mod4/mod4_e1.mjs
let breedte = parseFloat(await userInput.question('geef de breedte in: '))
let opp = (breedte * hoogte)

console.log(opp)


process.exit()