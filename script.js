let userScore = 0;
let computerScore = 0;

// DOM elements
let userChoiceText = document.getElementById("user-choice");
let computerChoiceText = document.getElementById("computer-choice");
let resultText = document.getElementById("result");
let userScoreText = document.getElementById("user-score");
let computerScoreText = document.getElementById("computer-score");

// Button events
document.getElementById("rock").onclick = function () {
  playGame("rock");
};

document.getElementById("paper").onclick = function () {
  playGame("paper");
};

document.getElementById("scissors").onclick = function () {
  playGame("scissors");
};

document.getElementById("reset").onclick = function () {
  resetGame();
};

// Game logic
function playGame(userChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceText.textContent = "Your choice: " + userChoice;
  computerChoiceText.textContent = "Computer choice: " + computerChoice;

  if (userChoice === computerChoice) {
    resultText.textContent = "Result: Draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = "Result: You win!";
    userScore++;
  } else {
    resultText.textContent = "Result: Computer wins!";
    computerScore++;
  }

  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;
}

// Reset game
function resetGame() {
  userScore = 0;
  computerScore = 0;

  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;

  userChoiceText.textContent = "Your choice:";
  computerChoiceText.textContent = "Computer choice:";
  resultText.textContent = "Result:";
}
