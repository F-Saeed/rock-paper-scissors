let computerPlay = () => {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
};

let playRound = (playerSelection, computerSelection) => {
  return playerSelection === "rock" && computerSelection === "scissors"
    ? "You Win!, rock beats scissors."
    : playerSelection === "rock" && computerSelection === "paper"
    ? "You Lose!, paper beats rock."
    : playerSelection === "paper" && computerSelection === "rock"
    ? "You Win!, paper beats rock."
    : playerSelection === "paper" && computerSelection === "scissors"
    ? "You Lose!, scissors beats paper."
    : playerSelection === "scissors" && computerSelection === "rock"
    ? "You Lose!, rock beats scissors."
    : playerSelection === "scissors" && computerSelection === "paper"
    ? "You Win!, scissors beats paper."
    : "Its a Tie!";
};

let round = 0;
let wins = 0;
let losses = 0;

$("img").on("click", (event) => {
  let computerSelection = computerPlay();
  let playerSelection = event.target.id;
  let result;

  if (round < 5) {
    setTimeout(() => {
      result = playRound(playerSelection, computerSelection);

      // updating round number
      round++;
      $("h3").text(`Round ${round}`);

      // displaying the result
      $("h2").text(result);

      // updating the scoreboard
      if (result.includes("Win!")) {
        wins++;
        $("#player-score").html(wins.toString());
      } else if (result.includes("Lose!")) {
        losses++;
        $("#computer-score").html(losses.toString());
      }

      if (round === 5) {
        $("img").removeClass("choice-hover");

        setTimeout(() => {
          if (wins > losses) {
            $("h2").text("You win the game!");
            $("h3").addClass("removed");
          } else if (losses > wins) {
            $("h2").text("You loose the game!");
            $("h3").addClass("removed");
          } else {
            $("h2").text("No winner!");
            $("h3").addClass("removed");
          }
        }, 1500);
      }
    }, 150);
  }
});

$("#restart").on("click", () => {
  location.reload(true);
});
