// generates a random choice from 'rock', 'paper', and 'scissor'
function getComputerChoice() {
  // generates a random integer from 0 to less than 3
  const randomNum = Math.trunc(Math.random() * 3);

  let compChoice = "";

  // returns random choice from 'rock', 'paper', and 'scissor'
  if (randomNum == 0) compChoice = "rock";
  else if (randomNum == 1) compChoice = "paper";
  else compChoice = "scissor";

  return compChoice;
}
