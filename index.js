var userScore = 0;
var compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
var resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scisorsDiv = document.getElementById("s");


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(user, Computer) {   
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = user + " beats " + Computer + ", You win!";
}
function lose(user, Computer) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = user + " loses to " + Computer + ", You lose";
}
function draw(user, Computer) {
    userScore++;
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = user + " == " + Computer + ",Tie";

}
function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoice);
            break;

    }
}

function main() {
    rockDiv.addEventListener('click', function() {
        game("r");
    })
    paperDiv.addEventListener('click', function() {
        game("p");
    })
    scisorsDiv.addEventListener('click', function() {
        game("s");
    })
}
main();