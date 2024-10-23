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
const reset = document.querySelector(".reset");

const p = document.createElement("p");
div.appendChild(p);

const scoreDisplayHuman = document.createElement("p");
div.appendChild(scoreDisplayHuman);

const scoreDisplayComputer = document.createElement("p");
div.appendChild(scoreDisplayComputer);

const result = document.createElement("p");
div.appendChild(result);

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

reset.addEventListener("click", () => {
  location.reload();
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
    p.textContent = `You WIN! ${
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}`;
  } else if (
    (computerChoice == "Rock" && humanChoice == "scissor") ||
    (computerChoice == "Paper" && humanChoice == "rock") ||
    (computerChoice == "Scissor" && humanChoice == "paper")
  ) {
    computerScore += 1;
    p.textContent = `You LOSE! ${computerChoice} beats ${
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
    }`;
  } else if (
    (computerChoice == "Rock" && humanChoice == "rock") ||
    (computerChoice == "Paper" && humanChoice == "paper") ||
    (computerChoice == "Scissor" && humanChoice == "scissor")
  )
    p.textContent = `Draw! ${
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
    } cannot beat another ${computerChoice}`;
  else {
    p.textContent = "Invalid Input. Please reload the page!";
  }
}

// plays a game
function playGame(userSelect) {
  const humanSelection = userSelect;
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  //Displays scores of both the players
  scoreDisplayHuman.textContent = `Your Score: ${humanScore}`;
  scoreDisplayComputer.textContent = `Computer Score: ${computerScore}`;

  // Displays final results of the round
  if (humanScore == 5) result.textContent = `You WIN!`;
  else if (computerScore == 5) result.textContent = `You LOSE!`;
}
