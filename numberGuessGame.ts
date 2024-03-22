#!  /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// function guessNo(min : number , max : number):number {
//   return Math.floor(Math.random() * (max - min +1) + min);
//   let guessNo = true;
// }
const sleep = ()=>{
  return new Promise((res)=>{
    setTimeout(res, 2000);
  })}

async function guess(){
  let animation = chalkAnimation.karaoke(`Let Start The Game`);
  await sleep ();
  animation.stop();
}
guess();
async function playGame(){
  const guessNo = Math.floor(Math.random() * 100);
  let continueGame = true;
  do {
    let answers = await inquirer.prompt([
      {
        name : "userGuess",
        type : "number",
        message : "Guess The Number is b/w 1 to 100 :",
      }
    ]);

    const {userGuess} = answers;
    console.log(userGuess, "userGuess", guessNo, 'sys');

    if (userGuess === guessNo) {
      console.log("Your answer is correct \n you win");
    }else{
      console.log("Your answer is not correct");
    }
    const {continueGam} = await inquirer.prompt([
      {
        name : "continueGam",
        type : "confirm",
        message : "Are You Sure to play the game",
        default : true
      }
    ]);
    continueGame = continueGam;
  } while (continueGame);
}
playGame();

        

        