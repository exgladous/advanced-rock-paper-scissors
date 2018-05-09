var playerChoice,
    computerChoice,
    rockButton = document.getElementById("rock"),
    paperButton = document.getElementById("paper"),
    scissorsButton = document.getElementById("scissors"),
    lizardButton = document.getElementById("lizard"),
    spockButton = document.getElementById("spock"),
    playButton = document.getElementById("play"),
    choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    score = [0, 0, 0];

rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

function playGame() {
    if (playerChoice == computerChoice) {
        console.log("tie");
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 3)) {
        console.log("win");
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 4)) {
        console.log("win");
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 3)) {
        console.log("win");
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 3 && (computerChoice == 4 || computerChoice == 1)) {
        console.log("win");
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 4 && (computerChoice == 2 || computerChoice == 0)) {
        console.log("win");
        updateScore(0);
        displayGameResult("win")
    } else {
        console.log("lose");
        updateScore(2);
        displayGameResult("lose")
    }
}

function displayGameResult(result) {
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }
    updateScoreBoard();
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}
