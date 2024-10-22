"use strict";

// generates a random choice from 'Rock', 'Paper', and 'Scissor'
function getComputerChoice() {
  // generates a random integer from 0 to less than 3
  const randomNum = Math.trunc(Math.random() * 3);

  // returns random choice from 'Rock', 'Paper', and 'Scissor'
  if (randomNum == 0) return "Rock";
  else if (randomNum == 1) return "Paper";
  else return "Scissor";
}

let userChoice;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const div = document.querySelector(".results");

rock.addEventListener("click", () => {
  userChoice = "rock";
  playGame(userChoice);
});

paper.addEventListener("click", () => {
  userChoice = "paper";
  playGame(userChoice);
});

scissor.addEventListener("click", () => {
  userChoice = "scissor";
  playGame(userChoice);
});

let humanScore = 0;
let computerScore = 0;

// plays each round
function playRound(humanChoice, computerChoice) {
  if (
    (computerChoice == "Rock" && humanChoice == "paper") ||
    (computerChoice == "Paper" && humanChoice == "scissor") ||
    (computerChoice == "Scissor" && humanChoice == "rock")
  ) {
    humanScore += 1;
    console.log(
      `You WIN! ${
        humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
  } else if (
    (computerChoice == "Rock" && humanChoice == "scissor") ||
    (computerChoice == "Paper" && humanChoice == "rock") ||
    (computerChoice == "Scissor" && humanChoice == "paper")
  ) {
    computerScore += 1;
    console.log(
      `You LOSE! ${computerChoice} beats ${
        humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
      }`
    );
  } else if (
    (computerChoice == "Rock" && humanChoice == "rock") ||
    (computerChoice == "Paper" && humanChoice == "paper") ||
    (computerChoice == "Scissor" && humanChoice == "scissor")
  )
    console.log(
      `Draw! ${
        humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
      } cannot beat another ${computerChoice}`
    );
  else {
    console.log("Invalid Input. Please reload the page!");
  }
}

// plays 5 rounds of game
function playGame(userSelect) {
  // loop to call the playRound function 1 times
  console.log(`Round : 1`);

  const humanSelection = userSelect;
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  //Displays scores of both the players
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  // Displays final results of the round
  if (humanScore > computerScore) console.log(`You WIN!`);
  else if (humanScore < computerScore) console.log(`You LOSE!`);
  else console.log(`No WINNER! No LOSER!`);
  console.log(`--------------------`);
}
