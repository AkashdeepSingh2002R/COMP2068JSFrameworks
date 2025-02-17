// firstly we will import prompt to use further

const prompt = require('prompt');
// know we will create a function to create a 
function cpuChoice() {
  //  generating  random number using math.random
  const randomNum = Math.random();
  // using if else to get random choices
  if (randomNum < 0.35) {
    return "ROCK";
  } else if (randomNum < 0.68) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}
//  knnow we will create new function to decide winner
function decideWinner(user, computer) {
  // using if else we will conpare user and computer choice and get winners according to the rules of the games
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
// we have anoter function that have the main logic of  the game 
function playGame() {
  // firstly  we will start the prompt
  prompt.start();
  // then we will get user choice , followed  by a callback function that handles error and result
  prompt.get(['userChoice'], function (err, result) {
    // if there will be error  it will get displayed to the user in console log
    if (err) {
      console.error(err);
      return;
    }
    // then we will create a variable to store the user input
    let userChoice = result.userChoice.toUpperCase().trim();
    // 
     if (userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
      console.log("Invalid input. Please choose ROCK, PAPER, or SCISSORS.");
      return;
    }

    const computerChoice = cpuChoice();
    console.log(`User Selection: ${userChoice}`);
    console.log(`Computer Selection: ${computerChoice}`);
    console.log(`Result: ${decideWinner(userChoice, computerChoice)}`);
  });
}

playGame();
