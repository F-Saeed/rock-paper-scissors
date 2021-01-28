let computerPlay = () => {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
};

let playRound = (playerSelection, computerSelection) => {
  return playerSelection === "rock" && computerSelection === "scissors"
    ? "You Win!"
    : playerSelection === "rock" && computerSelection === "paper"
    ? "You Lose!"
    : playerSelection === "paper" && computerSelection === "rock"
    ? "You Win!"
    : playerSelection === "paper" && computerSelection === "scissors"
    ? "You Lose!"
    : playerSelection === "scissors" && computerSelection === "rock"
    ? "You Lose!"
    : playerSelection === "scissors" && computerSelection === "paper"
    ? "You Win!"
    : "Its a Tie!";
};

function game() {
  let computerSelection;
  let playerSelection;
  let result;

  let wins = 0;
  let losses = 0;

  for (let index = 0; index < 5; index++) {
    computerSelection = computerPlay();
    playerSelection = prompt("Please input your choice").toLowerCase();

    result = playRound(playerSelection, computerSelection);

    if (result === "You Win!") {
      wins++;
    }
    if (result === "You Lose!") {
      losses++;
    }

    console.log(result);
  }

  if (wins > losses) {
    console.log("You win the game!");
  } else if (losses > wins) {
    console.log("You loose the game!");
  } else {
    console.log("No winner!");
  }
}
