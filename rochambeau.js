var playerChoice,
    computerChoice,
    rockButton = document.getElementById("rock"),
    paperButton = document.getElementById("paper"),
    scissorsButton = document.getElementById("scissors"),
    lizardButton = document.getElementById("lizard"),
    spockButton = document.getElementById("spock"),
    playButton = document.getElementById("play"),
    choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    score = [0, 0, 0],
    localscore = [0, 0, 0],
    matchwins = 0,
    matchlosses = 0;

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
    storeComputerChoice();
    playGame()
});

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

function playGame() {
    if (playerChoice == computerChoice) {
        console.log("tie");
        updateScore(1);
        updateMatchScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 3)) {
        console.log("win");
        updateScore(0);
        updateMatchScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 4)) {
        console.log("win");
        updateScore(0);
        updateMatchScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 3)) {
        console.log("win");
        updateScore(0);
        updateMatchScore(0);
        displayGameResult("win")
    } else if (playerChoice == 3 && (computerChoice == 4 || computerChoice == 1)) {
        console.log("win");
        updateScore(0);
        updateMatchScore(0);
        displayGameResult("win")
    } else if (playerChoice == 4 && (computerChoice == 2 || computerChoice == 0)) {
        console.log("win");
        updateScore(0);
        updateMatchScore(0);
        displayGameResult("win")
    } else {
        console.log("lose");
        updateScore(2);
        updateMatchScore(2);
        displayGameResult("lose")
    }
}

function displayGameResult(result) {
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";

    if (localscore[0] == 2) {
        var messagetwo = "You won the match " + localscore[0] + " - " + localscore[2] + ".";
    } else if (localscore[2] == 2) {
        var messagetwo = "You lost the match " + localscore[0] + " - " + localscore[2] + ".";
    } else {
        var messagetwo = "Your current best of three score is " + localscore[0] + " - " + localscore[2] + ".";
    }

    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN! " + messagetwo;
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE! " + messagetwo;
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie. " + messagetwo;
        document.getElementById("result").className = "alert alert-info";
    }
    updateScoreBoard();

    if (localscore[0] == 2 || localscore[2] == 2) {
        localscore = [0, 0, 0];
    }
}

function updateScore(val) {
    ++score[val];
}

function updateMatchScore(val) {
    ++localscore[val];
    if (localscore[0] == 2) {
        matchwins++
        document.getElementById("matchwins").textContent = matchwins
    } else if (localscore[2] == 2) {
        matchlosses++
        document.getElementById("matchlosses").textContent = matchlosses
    }
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}
