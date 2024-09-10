// generates a random choice from 'rock', 'paper', and 'scissor'
function getComputerChoice() {
  // generates a random integer from 0 to less than 3
  const randomNum = Math.trunc(Math.random() * 3);

  // returns random choice from 'rock', 'paper', and 'scissor'
  if (randomNum == 0) return "rock";
  else if (randomNum == 1) return "paper";
  else return "scissor";
}

// takes the user choice
function getHumanChoice() {
  // accepts user choice
  const userChoice = prompt(`Choose between 'rock', 'paper', or 'scissor`);

  return userChoice;
}

let compCh = getComputerChoice();
let userCh = getHumanChoice();

if (
  (compCh == "rock" && userCh == "paper") ||
  (compCh == "paper" && userCh == "scissor") ||
  (compCh == "scissor" && userCh == "rock")
) {
  console.log("You WIN! 🎁");
} else if (
  (compCh == "rock" && userCh == "scissor") ||
  (compCh == "paper" && userCh == "rock") ||
  (compCh == "scissor" && userCh == "paper")
) {
  console.log("You LOSE! 😑");
} else if (
  (compCh == "rock" && userCh == "rock") ||
  (compCh == "paper" && userCh == "paper") ||
  (compCh == "scissor" && userCh == "scissor")
) {
  console.log("DRAW! 🤔");
} else console.log("Check the spelling");

console.log("Your Choice : " + userCh);
console.log("Computer Choice : " + compCh);
