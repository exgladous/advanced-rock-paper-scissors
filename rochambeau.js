var player = new Player(),
    computer = new Player(),
    rockButton = document.getElementById("rock"),
    paperButton = document.getElementById("paper"),
    scissorsButton = document.getElementById("scissors"),
    lizardButton = document.getElementById("lizard"),
    spockButton = document.getElementById("spock"),
    playButton = document.getElementById("play"),
    matchscore = {
        wins: 0,
        losses: 0
    },
    choices = {
        rock: 0,
        paper: 1,
        scissors: 2,
        lizard: 3,
        spock: 4
    },
    choicesinverse = {
        0: "Rock",
        1: "Paper",
        2: "Scissors",
        3: "Lizard",
        4: "Spock"
    },
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    },
    localscore = {
        wins: 0,
        losses: 0,
        ties: 0
    }

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

function Player() {
    this.choice = null;
}

function storePlayerChoice(choice) {
    player.choice = choice;
    console.log("My choice = " + player.choice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computer.choice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computer.choice);
}

function playGame() {
    if (player.choice == computer.choice) {
        console.log("tie");
        ++score.ties;
        ++localscore.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.rock && (computer.choice == choices.scissors || computer.choice == choices.lizard)) {
        console.log("win");
        ++score.wins;
        ++localscore.wins;
        displayGameResult("win")
    } else if (player.choice == choices.paper && (computer.choice == choices.rock || computer.choice == choices.spock)) {
        console.log("win");
        ++score.wins;
        ++localscore.wins;
        displayGameResult("win")
    } else if (player.choice == choices.scissors && (computer.choice == choices.paper || computer.choice == choices.lizard)) {
        console.log("win");
        ++score.wins;
        ++localscore.wins;
        displayGameResult("win")
    } else if (player.choice == choices.lizard && (computer.choice == choices.spock || computer.choice == choices.paper)) {
        console.log("win");
        ++score.wins;
        ++localscore.wins;
        displayGameResult("win")
    } else if (player.choice == choices.spock && (computer.choice == choices.scissors || computer.choice == choices.rock)) {
        console.log("win");
        ++score.wins;
        ++localscore.wins;
        displayGameResult("win")
    } else {
        console.log("lose");
        ++score.losses;
        ++localscore.losses;
        displayGameResult("lose")
    }
}

function displayGameResult(result) {

    if (localscore.wins == 2) {
        var messagetwo = "You won the match " + localscore.wins + " - " + localscore.losses + ".";
    } else if (localscore.losses == 2) {
        var messagetwo = "You lost the match " + localscore.wins + " - " + localscore.losses + ".";
    } else {
        var messagetwo = "Your current best of three score is " + localscore.wins + " - " + localscore.losses + ".";
    }

    var message = "Your choice was " + choicesinverse[player.choice] + " and the computer's choice was " + choicesinverse[computer.choice] + ".";
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
    updateMatchScore();

}

function updateMatchScore() {
    if (localscore.wins == 2) {
        ++matchscore.wins;
        localscore.wins = 0;
        localscore.losses = 0;
        localscore.ties = 0;
    } else if (localscore.losses == 2) {
        ++matchscore.losses;
        localscore.wins = 0;
        localscore.losses = 0;
        localscore.ties = 0;
    }
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
    document.getElementById("matchwins").textContent = matchscore.wins;
    document.getElementById("matchlosses").textContent = matchscore.losses;
}
