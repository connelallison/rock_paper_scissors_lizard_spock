"use strict";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

const explainRules = function () {
  console.log("Rock, Paper, Scissors, Lizard, Spock is like Rock, Paper, Scissors, but with the addition of Lizard and Spock.");
  console.log("Scissors cuts Paper");
  console.log("Paper covers Rock");
  console.log("Rock crushes Lizard");
  console.log("Lizard poisons Spock");
  console.log("Spock smashes Scissors");
  console.log("Scissors decapitates Lizard");
  console.log("Lizard eats Paper");
  console.log("Paper disproves Spock");
  console.log("Spock vaporizes Rock");
  console.log("Rock crushes Scissors");
  console.log("Pick one of the five, and the computer will play against you.");
  getInput();
}

const getInput = function () {
  readline.question("Your input: ", (input) => {
    let userInput = input.toLowerCase();
    checkInput(userInput);
  })
}

const checkInput = function (userInput) {
  if (userInput) {
    if (["rock", "paper", "scissors", "lizard", "spock"].includes(userInput)) {
      let computerGuess = randomGuess();
      checkWinner(userInput, computerGuess);
    } else if (userInput === "rules") {
      explainRules();
    } else if (userInput === "quit") {
      console.log("Goodbye.");
      process.exit();
    } else {
      console.log("Invalid input. Try again.");
      getInput();
    }
  } else {
    setTimeout(checkInput, 50, userInput);
  }
}


const playAgain = function () {
  readline.question("Play again? y/n  ", (input) => {
    if (input.toLowerCase() === "y") {
      game();
    } else if (input.toLowerCase() === "n") {
      console.log("Goodbye.");
      process.exit();
    } else {
      console.log("Invalid input. Try again.");
      playAgain();
    }
  })
}

const randomGuess = function () {
  const num = Math.floor(Math.random() * 5);
  switch (num) {
    case 0:
      console.log("The computer chooses: rock");
      return "rock";
      break;
    case 1:
      console.log("The computer chooses: paper");
      return "paper";
      break;
    case 2:
      console.log("The computer chooses: scissors");
      return "scissors";
      break;
    case 3:
      console.log("The computer chooses: lizard");
      return "lizard";
      break;
    case 3:
      console.log("The computer chooses: spock");
      return "spock";
      break;
    default:
  }
}

const checkWinner = function (player1, player2) {
  switch (player1) {
    case "rock":
      switch (player2) {
        case "rock":
          console.log("It's a draw!");
          break;
        case "paper":
        case "spock":
          console.log("The computer wins!");
          break;
        case "lizard":
        case "scissors":
          console.log("You win!");
          break;
        default:
      }
      break
    case "paper":
      switch (player2) {
        case "paper":
          console.log("It's a draw!");
          break;
        case "scissors":
        case "lizard":
          console.log("The computer wins!");
          break;
        case "rock":
        case "spock":
          console.log("You win!");
          break;
        default:
      }
      break;
    case "scissors":
      switch (player2) {
        case "scissors":
          console.log("It's a draw!");
          break;
        case "rock":
        case "spock":
          console.log("The computer wins!");
          break;
        case "lizard":
        case "paper":
          console.log("You win!");
          break;
        default:
      }
      break
    case "lizard":
      switch (player2) {
        case "lizard":
          console.log("It's a draw!");
          break;
        case "rock":
        case "scissors":
          console.log("The computer wins!");
          break;
        case "spock":
        case "paper":
          console.log("You win!");
          break;
        default:
      }
      break;
    case "spock":
      switch (player2) {
        case "spock":
          console.log("It's a draw!");
          break;
        case "paper":
        case "lizard":
          console.log("The computer wins!");
          break;
        case "rock":
        case "scissors":
          console.log("You win!");
          break;
        default:
      }
      break;
    default:
  }
  playAgain();
}

const game = function () {
  console.log("");
  console.log("Welcome to \"Rock, Paper, Scissors, Lizard, Spock\".");
  console.log("Type \"rules\" to read the rules of the game, \"quit\" to quit, or otherwise type your choice if you're ready to play.");
  getInput();
}

game();
