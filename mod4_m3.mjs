import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question('geef de hoogte: '))
let starttop = await userInput.question('Boven beginnen? j/n ')
let startleft = await userInput.question('links beginnen? j/n ')

starttop = (starttop === 'j')
startleft = (startleft ==='j')

if(starttop){
    for(let i = 1;i <= hoogte; i++){
        let stringP = ''
        let spatie = ''
        if (startleft){
            for(let j = 1; j <= i; j++)
                stringP += i
                console.log(stringP)

        }else{
            for(let j = 0; j < (hoogte - i); j++)
                 spatie += ' '

            for(let k= 1; k <= i; k++){
                stringP += i
                
            }console.log(spatie + stringP)

        }
}

}else{
    for(let i = hoogte;i >= 0; i--){
        let stringP = ''
        let spatie = ''
        if(startleft){
            for(let j = i; j >= 0; j--)
                stringP += i
                console.log(stringP)
/* hier herhaal ik de code, dus dit heeft nog ruimte op verbetering, en er zal op een later tijdstip op teruggekomen worden zodat ik mijn progressie kan meten. */
        }else{
            for(let j = 0; j <(hoogte-i); j++)
                spatie+=' '

            for(let k = 1; k <= i; k++){
                stringP+= i
            }console.log(spatie + stringP)
            
        }
    }
}

process.exit()