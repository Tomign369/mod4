import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let choices = ['rock', 'paper', 'scissors'];


let gewonnen = 0
let gelijkspel = 0
let verloren = 0



for( let i = 1; gewonnen < 3 && verloren < 3; i++){

    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    let pchoices = await userInput.question('maak een keuzen tussen rock, paper, scossors: ')

    if(
        pchoices == 'rock' && computerChoice == 'scissors' ||
        pchoices == 'paper' && computerChoice == 'rock' ||
        pchoices == 'scissors' && computerChoice == 'paper'
    ){gewonnen += 1
        console.log('Gewonnen! ' +gewonnen+ '/3')
    }
    else if(
        pchoices == 'rock' && computerChoice == 'rock' ||
        pchoices == 'paper' && computerChoice == 'paper' ||
        pchoices == 'scissors' && computerChoice == 'scissors'
    ){gelijkspel += 1
        console.log('Gelijkspel!')
    }else
    {verloren += 1
    console.log('verloren! ' +verloren+ '/3')
    }
}
if(gewonnen == 3){
    console. log('gewonnen :D')
}else{
    console.log('verloren :(')
}


process.exit()