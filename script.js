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

// returns user choice
function getHumanChoice() {
  return prompt(`Choose between 'Rock', 'Paper', or 'Scissor`);
}

// plays 5 rounds of game
function playGame() {
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
      (computerChoice == "rock" && humanChoice == "rock") ||
      (computerChoice == "paper" && humanChoice == "paper") ||
      (computerChoice == "scissor" && humanChoice == "scissor")
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

  // loop to call the playRound function 5 times
  for (let i = 1; i <= 5; i++) {
    console.log(`Round : ${i}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection.toLowerCase(), computerSelection);
  }

  console.log(`--------------------`);

  //Displays scores of both the players
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  // Displays final results of the round
  if (humanScore > computerScore) console.log(`You WIN!`);
  else if (humanScore < computerScore) console.log(`You LOSE!`);
  else console.log(`No WINNER! No LOSER!`);
}

playGame();
