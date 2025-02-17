// Firstly, import prompt-sync
const prompt = require('prompt-sync')();

// Function to generate the CPU's choice.
function cpuChoice() {
  // Generating a random number using Math.random
  const randomNum = Math.random();
  // Using if/else to select a random choice
  if (randomNum < 0.35) {
    return "ROCK";
  } else if (randomNum < 0.68) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

// Function to decide the winner by comparing user and computer choices.
function decideWinner(user, computer) {
  // Compare user and computer choice according to the game rules
  if (user === computer) {
    return "It's a tie";
  } else if (
    (user === "ROCK" && computer === "SCISSORS") ||
    (user === "SCISSORS" && computer === "PAPER") ||
    (user === "PAPER" && computer === "ROCK")
  ) {
    return "User Wins";
  } else {
    return "Computer Wins";
  }
}

// Main function containing the game logic.
function playGame() {
  // Prompt the user for input synchronously.
  let userChoice = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ");
  // Convert the input to uppercase and trim any whitespace.
  userChoice = userChoice.toUpperCase().trim();

  // Validate the user input using an array and the includes() method.
  if (!["ROCK", "PAPER", "SCISSORS"].includes(userChoice)) {
    console.log("Invalid input. Please choose ROCK, PAPER, or SCISSORS.");
    return;
  }

  // Get the CPU's choice.
  const computerChoice = cpuChoice();

  // Display the selections and the result.
  console.log(`User Selection: ${userChoice}`);
  console.log(`Computer Selection: ${computerChoice}`);
  console.log(`Result: ${decideWinner(userChoice, computerChoice)}`);
}

// Start the game.
playGame();
