import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = await userInput.question('geef de hoogte in ')
let breedte = await userInput.question('geef de breedte in ')
let spatie =''
let volbreedte = ''


for(let i = 1; i <= breedte; i++){
    volbreedte +='*'
}console.log(volbreedte)

for(let j = 1; j <= (breedte -2); j++){
    spatie += ' '
}
for(let k = 1; k <= (hoogte - 2); k++){
    console.log('*' + spatie +'*')
    }
    console.log(volbreedte)

process.exit()